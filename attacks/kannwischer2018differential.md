---
source: https://doi.org/10.1007/978-3-319-89641-0_10
year: 2018
authors: Matthias J. Kannwischer, Aymeric Genêt, Denis Butin, Juliane Krämer, Johannes Buchmann
family:
  - hash
  - DSA
scheme:
  - SPHINCS+
  - XMSS
scenario: static key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
possible countermeasures:
  - hiding
target:
  - hash function
techniques:
  - DPA
---
# Differential Power Analysis of XMSS and SPHINCS