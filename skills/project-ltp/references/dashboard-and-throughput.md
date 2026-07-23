# Local dashboard and throughput

Use this reference when preparing a model for graphical exploration or serving
the bundled local dashboard.

## Dashboard-ready model

Keep `ltp/ltp-model.yaml` authoritative. In addition to the shared-model fields,
include:

```yaml
analysis:
  current_constraint: RC-1
  recommended_next_action: ACT-1
  expected_effect: DE-1
  updated_at: 2026-07-12T14:32:00Z

links:
  - id: L-1
    from: RC-1
    to: UDE-1
    relation: causes
    confidence: high

views:
  current-reality:
    title: Why delivery is unpredictable
    purpose: The causes behind the observed effects.
    entities: [RC-1, UDE-1]
    links: [L-1]
```

Use stable link IDs. Define only views supported by the analysis. Reuse entity
and link IDs rather than copying entities into view-specific structures.

Supported view keys are:

- `goal-tree`
- `current-reality`
- `evaporating-cloud`
- `future-reality`
- `prerequisite-tree`
- `transition-tree`

Validate the contract against `references/ltp-model.schema.json` when a JSON
Schema validator is available.

## Throughput versus flow indicators

Do not equate completed tasks with Theory of Constraints throughput unless the
project explicitly defines completed tasks as its goal unit.

Create `ltp/throughput.yaml` only when a defensible definition and real periods
are available:

```yaml
definition:
  name: Validated decisions adopted by participating groups
  unit: adopted decisions
  period: week
  goal_entity: G-1
  constraint_entity: RC-1
  source: manual activity log

periods:
  - date: 2026-07-06
    throughput: 3
    completed: 8
    work_in_progress: 14
    blocked: 5
    median_cycle_time_days: 6.2
    constraint_queue: 9
```

Treat `completed`, `work_in_progress`, `blocked`, `median_cycle_time_days`, and
`constraint_queue` as supporting flow indicators. Never fabricate missing
periods or silently mix different units.

Validate against `references/throughput.schema.json` when possible.

## Serve locally

From the skill's repository, run:

```bash
python skills/project-ltp/scripts/serve_dashboard.py --project /path/to/project --open
```

The server binds to loopback, prefers `127.0.0.1:8765`, serves only the bundled
frontend and the two known YAML files, and is read-only. If the preferred port
is occupied and `--port` was not supplied, it tries subsequent ports and prints
the selected URL. An explicit `--port` remains strict. The dashboard polls file
metadata so model changes appear without restarting the server.

Use `--host` with `--allow-network` only after the user explicitly requests
network exposure.
