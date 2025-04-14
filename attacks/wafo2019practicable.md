---
source: https://eprint.iacr.org/2019/909
year: 2019
authors: Guillaume Wafo-Tapa, Slim Bettaieb, Loic Bidoux, Philippe Gaborit, Etienne Marcatel
family:
  - code
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
  - constant-time
target:
  - decoder/BCH
techniques:
  - timing
---
# A Practicable Timing Attack Against HQC and its Countermeasure