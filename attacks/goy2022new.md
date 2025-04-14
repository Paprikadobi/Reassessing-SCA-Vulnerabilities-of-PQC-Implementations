---
source: https://link.springer.com/chapter/10.1007/978-3-031-17234-2_17
year: 2022
authors: Guillaume Goy, Antoine Loiseau Philippe Gaborit
family:
  - code
  - KEM
scheme:
  - HQC
scenario: static key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
  - choose ciphertext
possible countermeasures:
  - masking
target:
  - decoder/Reed-Muller
techniques:
  - DEMA
implementation source: "HQC reference implementation: https://pqc-hqc.org/implementation.html"
---
# A New Key Recovery Side-Channel Attack on HQC with Chosen Ciphertext

