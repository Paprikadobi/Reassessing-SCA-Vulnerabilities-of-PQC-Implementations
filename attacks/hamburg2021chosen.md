---
source: https://tches.iacr.org/index.php/TCHES/article/view/9061
year: 2021
authors: Mike Hamburg, Julius Hermelink, Robert Primas, Simona Samardjiska, Thomas Schamberger, Silvan Streit, Emanuele Strieder, Christine van Vredendaal
family:
  - lattice/M-LWE
scheme:
  - Kyber
scenario: ephemeral key
leaked: secret key
implementation:
  - SW
  - Simulated
adversarial:
  - observe
  - choose ciphertext
  - profile
possible countermeasures:
  - shuffling
target:
  - NTT
techniques:
  - SASCA
---
# Chosen Ciphertext k-Trace Attacks on Masked CCA2 Secure Kyber