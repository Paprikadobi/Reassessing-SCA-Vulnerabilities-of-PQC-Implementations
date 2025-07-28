---
source: https://eprint.iacr.org/2025/802
year: 2025
authors: Nicolas Vallet, Pierre-Louis Cayrel, Brice Colombier, Vlad-Florin Dragoi, Vincent Grosso
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
  - masking
target:
  - pointwise multiplication
techniques:
  - profiling/template
---
# Optimizing Key Recovery in Classic {McEliece