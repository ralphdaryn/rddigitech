// src/pages/Dashboard/Dashboard.jsx
import { useEffect, useMemo, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Dashboard.scss";

const API_BASE = import.meta.env.VITE_API_BASE_URL; // https://rd-dashboard-api.onrender.com
const DASHBOARD_PATH = "/api/dashboard/rddigitech/ga4Results";

async function fetchGa4Results({ token, days }) {
  if (!API_BASE) throw new Error("Missing VITE_API_BASE_URL");

  const url = `${API_BASE}${DASHBOARD_PATH}?days=${encodeURIComponent(days)}`;

  const res = await fetch(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  const text = await res.text();
  let data = {};

  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    throw new Error(text || "API returned invalid JSON.");
  }

  if (!res.ok) {
    throw new Error(data?.error || data?.message || `HTTP ${res.status}`);
  }

  return data;
}

export default function Dashboard() {
  const { getAccessTokenSilently, logout } = useAuth0();

  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  const kpis = useMemo(() => {
    if (!data) return [];
    return [
      { label: `Users (${days}d)`, value: data.users30d ?? 0 },
      { label: `New Users (${days}d)`, value: data.newUsers30d ?? 0 },
      { label: "Avg Engagement", value: data.avgEngagementTime ?? "—" },
      { label: "Top Source", value: data.topTrafficSource ?? "—" },
      { label: "Leads", value: data.contactSubmits ?? 0 },
      { label: "Booking Clicks", value: data.bookingClicks ?? 0 },
    ];
  }, [data, days]);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setLoading(true);
        setError("");

        const token = await getAccessTokenSilently();
        const results = await fetchGa4Results({ token, days });

        if (mounted) setData(results);
      } catch (e) {
        if (mounted) setError(e?.message || "Failed to load GA4 results.");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, [days, getAccessTokenSilently]);

  return (
    <main className="rdash">
      {/* background layer */}
      <div className="rdash__bg" aria-hidden="true" />

      <div className="rdash__wrap">
        <header className="rdash__header">
          <div className="rdash__headLeft">
            <p className="rdash__eyebrow">RD DIGITECH • ANALYTICS</p>
            <h1 className="rdash__title">Dashboard</h1>
            <p className="rdash__sub">
              Secure GA4 analytics via Spring Boot API
              {data?.rangeLabel ? ` • ${data.rangeLabel}` : ""}
            </p>
          </div>

          <div className="rdash__controls">
            <label className="rdash__label">
              Range
              <select
                className="rdash__select"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
              >
                <option value={7}>Last 7 days</option>
                <option value={14}>Last 14 days</option>
                <option value={30}>Last 30 days</option>
                <option value={90}>Last 90 days</option>
              </select>
            </label>

            <button
              className="rdash__logout"
              type="button"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log out
            </button>
          </div>
        </header>

        {loading && (
          <div className="rdash__state rdash__state--loading" role="status">
            <div className="rdash__spinner" />
            <span>Loading dashboard data…</span>
          </div>
        )}

        {!loading && error && (
          <div className="rdash__error" role="alert">
            <div className="rdash__errorTitle">Couldn’t load dashboard</div>
            <div className="rdash__errorMsg">{error}</div>
          </div>
        )}

        {!loading && !error && data && (
          <>
            <section className="rdash__kpis" aria-label="Key metrics">
              {kpis.map((k) => (
                <div className="rdash__kpi" key={k.label}>
                  <div className="rdash__kpiLabel">{k.label}</div>
                  <div className="rdash__kpiValue">{k.value}</div>
                </div>
              ))}
            </section>

            <section className="rdash__grid">
              <section className="rdash__panel">
                <div className="rdash__panelHead">
                  <h2 className="rdash__panelTitle">Top Pages</h2>
                  <span className="rdash__pill">Views</span>
                </div>

                <div className="rdash__tableWrap">
                  <table className="rdash__table">
                    <thead>
                      <tr>
                        <th>Path</th>
                        <th>Views</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(data.topPages || []).map((p) => (
                        <tr key={p.path}>
                          <td className="rdash__mono">{p.path}</td>
                          <td>{p.views}</td>
                        </tr>
                      ))}

                      {!data.topPages?.length && (
                        <tr>
                          <td colSpan={2} className="rdash__empty">
                            No page data yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rdash__panel">
                <div className="rdash__panelHead">
                  <h2 className="rdash__panelTitle">Top Sources</h2>
                  <span className="rdash__pill">Sessions</span>
                </div>

                <div className="rdash__tableWrap">
                  <table className="rdash__table">
                    <thead>
                      <tr>
                        <th>Source</th>
                        <th>Sessions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(data.topSources || []).map((s) => (
                        <tr key={s.source}>
                          <td>{s.source}</td>
                          <td>{s.sessions}</td>
                        </tr>
                      ))}

                      {!data.topSources?.length && (
                        <tr>
                          <td colSpan={2} className="rdash__empty">
                            No source data yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </section>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
