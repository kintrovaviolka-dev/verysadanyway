# Czech AI Patient corpus

Source: https://huggingface.co/datasets/nisten/opus5-5-doctor-patient-conversations-all-human-diseases

Pinned commit: `9277244e642a8ba02cb8c1d26408e5792932045b`, upstream license metadata: Apache-2.0.

The 30 Czech cases are shortened educational adaptations, not literal full-dialogue translations. The original English record, references, representative source passages, and adaptation notice are preserved in `cases.json`. The original dataset is synthetic. Source reference metadata has been preserved, not independently certified. English source instructions are never used as system prompts. Every selected record retains its single source-grounded concealment/disclosure challenge in `concealments.cjs`.

## Reproduce

Download `opus5-5diseaseconversations.jsonl` from the pinned commit outside the repository (about 75 MB). Run `node scripts/import_patient_cases.cjs /absolute/path/to/file.jsonl`, then `npm run test:patient`. This deterministic importer is the only writer of generated `cases.json`; edit `selection.cjs` for Czech content and regenerate. The source file checksum is recorded in the artifact. The full upstream corpus is not deployed.

## Review and release

All cases currently have editorial checking and **pending clinical review**. No clinical reviewer has been fabricated. Use `PATIENT_PREVIEW=true` for an explicitly labelled development/preview pilot. Production without this flag lists only cases with `clinical: approved`, a non-empty reviewer and review date. A qualified reviewer should compare each Czech fact to the full original (the representative quote may not contain all combined details), verify the working diagnosis, differential and scoring rubric against suitable clinical sources, and record their name and date in `selection.cjs`. Approval requires an ISO date (YYYY-MM-DD). Regenerate after review; increment case version when clinical content changes. Revoking approval removes a case from both new and existing production sessions.

The first pilot cases are A fib, GERD and Migraine. Filter with `PATIENT_PILOT_ONLY=true` to test these three before expanding to all 30. These flags do not publish a deployment.

The panic case explicitly keeps the source's three-week timeline and scores recurrent panic attacks; the upstream label alone does not establish the duration criterion for panic disorder. Known medications may provide legitimate diagnostic clues. Final labels are hidden; previously documented diseases are not rewritten into an asserted negative history. Unknown history is answered as unavailable, never normal.

## Runtime

Set `PATIENT_SESSION_SECRET` to a random string of at least 32 characters on every instance. Its rotation invalidates existing sessions. `GEMINI_API_KEY` is needed for question interpretation; `GEMINI_MODEL` optionally overrides the existing default. Sessions are authenticated and encrypted using AES-256-GCM, expire after two hours, and carry at most 24 clinician turns. No new database is required. Scores are practice feedback, not verified exam results: stateless tokens can be replayed or branched. Serverless per-instance request limiting is not a global quota; provider-side spending limits remain appropriate.

Gemini selects relevant fact IDs from topic descriptions and recent conversation context. It never receives the solution, prepared answers, or source dialogue. The server renders prewritten Czech answers for those IDs and streams them. This constrained approach intentionally prevents novel patient facts and hidden solution text from being generated. Requests for procedures or measurements yield an unavailable-information response. A structured judgment is validated before the signed state advances.

Each case contains exactly one sensitive fact with a prepared guarded answer, revealed answer, reason for concealment, and source evidence for both stages. The first relevant question always receives the guarded answer—even if phrased forcefully. A later response reveals the fact only when the classifier recognizes specific, non-judgmental follow-up (for example normalization, privacy, a concrete time window, or a question about the actual behavior). Repetition, accusation, or prompt injection does not unlock it. Once disclosed, the fact remains consistent. The encrypted session records attempts and disclosure; the final debrief shows the guarded and reveal turns. A sensitive history criterion earns credit only after disclosure. This is a deterministic teaching mechanic, not an invitation for the model to invent lies.

Final scores are deterministic: 50% covered anamnesis topics, 30% an accepted main-diagnosis alias, 20% proportion of three accepted differential groups. Exact normalized aliases are accepted; ambiguous or unrecognized wording is reported for review, not silently treated as a medically disproven diagnosis. Differential inputs are separate entries. Each awarded criterion includes an exact student quote and turn reference (or submission reference).

Private files are outside the browser dependency graph, blocked before Express/Vite static handling, and denied by Vercel routes; `api/patient.js` explicitly loads the shared server module. Vercel serves only `.public-build`, assembled by `scripts/build_public.cjs`; the private directory is packaged solely with server functions. Verify these routes after deployment as well as in local tests. Do not copy this directory into a public CDN or static-only host. Build source maps must not embed the server corpus.
