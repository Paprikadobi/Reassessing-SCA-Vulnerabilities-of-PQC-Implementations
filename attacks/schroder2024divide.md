---
source: https://eprint.iacr.org/2024/299
year: 2024
authors: Robin Leander Schröder, Stefan Gast, Qian Guo
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
  - FO transformation
techniques:
  - timing
---
# Divide and Surrender: Exploiting Variable Division Instruction Timing in HQC Key Recovery Attacks