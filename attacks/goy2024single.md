---
source: https://tches.iacr.org/index.php/TCHES/article/view/11421
year: 2024
authors: Guillaume Goy, Julien Maillard, Philippe Gaborit, Antoine Loiseau
family:
  - code
scheme:
  - HQC
scenario: ephemeral key
leaked: session key
implementation:
  - SW
  - masked
  - shuffled
adversarial:
  - observe
  - profile
possible countermeasures:
  - algorithm change/encoding
target:
  - decoder/Reed-Solomon
  - encoder/Reed-Solomon
techniques:
  - SASCA
implementation source: "HQC reference implementation: https://pqc-hqc.org/implementation.html"
---
# Single trace HQC shared key recovery with SASCA