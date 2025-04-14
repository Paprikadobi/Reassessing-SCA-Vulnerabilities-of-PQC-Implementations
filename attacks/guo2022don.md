---
source: https://tches.iacr.org/index.php/TCHES/article/view/9700
year: 2022
authors: Qian Guo, Clemens Hlauschek, Thomas Johansson, Norman Lahr, Alexander Nilsson, Robin Leander Schröder
family:
  - code
scheme:
  - HQC
  - BIKE
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
implementation source: reference implementation of BIKE
---
# Don’t reject this: Key-recovery timing attacks due to rejection-sampling in HQC and BIKE

