import type { LtpEntity, LtpModel, ModelIndex } from "./model";

interface DetailsPanelProps {
  entity: LtpEntity | null;
  model: LtpModel;
  index: ModelIndex;
  onClose: () => void;
}

export function DetailsPanel({ entity, model, index, onClose }: DetailsPanelProps) {
  if (!entity) return null;
  const evidence = (entity.evidence ?? [])
    .map((id) => index.evidence.get(id))
    .filter(Boolean);
  const incoming = model.links.filter((link) => link.to === entity.id);
  const outgoing = model.links.filter((link) => link.from === entity.id);
  const views = Object.entries(model.views)
    .filter(([, view]) => view?.entities.includes(entity.id))
    .map(([name]) => name.replaceAll("-", " "));

  return (
    <aside className="details-panel" aria-label={`Details for ${entity.id}`}>
      <div className="details-panel__topline">
        <span className="eyebrow">Selected node</span>
        <button className="icon-button" type="button" onClick={onClose} aria-label="Close details">
          ×
        </button>
      </div>
      <div className="entity-identity">
        <strong>{entity.id}</strong>
        <span>{entity.type.replaceAll("_", " ")}</span>
      </div>
      <h2>{entity.statement}</h2>
      <div className="fact-row">
        <span><i className={`status-mark status-mark--${entity.status}`} />{entity.status}</span>
        <span>{entity.confidence} confidence</span>
      </div>

      {entity.reasoning && (
        <section className="detail-section">
          <h3>Why this is in the model</h3>
          <p>{entity.reasoning}</p>
        </section>
      )}

      <details className="detail-disclosure" open={evidence.length > 0}>
        <summary>Evidence <span>{evidence.length}</span></summary>
        <div className="disclosure-body">
          {!evidence.length && <p className="muted">No evidence attached.</p>}
          {evidence.map((item) => (
            <article className="evidence-card" key={item!.id}>
              <div><strong>{item!.id}</strong><code>{item!.source}{item!.lines ? `:${item!.lines}` : ""}</code></div>
              <p>{item!.observation}</p>
              {item!.interpretation && <small>{item!.interpretation}</small>}
            </article>
          ))}
        </div>
      </details>

      <details className="detail-disclosure">
        <summary>Assumptions <span>{entity.assumptions?.length ?? 0}</span></summary>
        <div className="disclosure-body">
          {!entity.assumptions?.length ? (
            <p className="muted">No assumptions attached.</p>
          ) : (
            <ul>{entity.assumptions.map((item) => <li key={item}>{item}</li>)}</ul>
          )}
        </div>
      </details>

      <details className="detail-disclosure">
        <summary>Causal connections <span>{incoming.length + outgoing.length}</span></summary>
        <div className="disclosure-body connection-list">
          {incoming.map((link) => (
            <p key={link.id}><code>{link.from}</code><span>→ {link.relation.replaceAll("_", " ")} →</span><strong>{entity.id}</strong></p>
          ))}
          {outgoing.map((link) => (
            <p key={link.id}><strong>{entity.id}</strong><span>→ {link.relation.replaceAll("_", " ")} →</span><code>{link.to}</code></p>
          ))}
        </div>
      </details>

      <div className="view-membership">
        <span className="eyebrow">Appears in</span>
        <p>{views.join(" · ") || "No view"}</p>
      </div>
    </aside>
  );
}
