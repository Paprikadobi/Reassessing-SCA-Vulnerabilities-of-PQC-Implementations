---
source: https://doi.org/10.46586/tches.v2025.i1.367-391
year: 2025
authors: Vlad-Florin Drăgoi, Brice Colombier, Nicolas Vallet, Pierre-Louis Cayrel, Vincent Grosso
family:
  - code
  - KEM
scheme:
  - McEliece
scenario: ephemeral key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
  - profile
possible countermeasures:
  - algorithm change
  - masking
target:
  - pointwise multiplication
techniques:
  - profiling/template
---
# Full Key-Recovery Cubic-Time Template Attack on Classic McEliece Decapsulation