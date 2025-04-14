---
source: https://tches.iacr.org/index.php/TCHES/article/view/9697
year: 2021
authors: Morgane Guerreau, Ange Martinelli, Thomas Ricosset, Mélissa Rossi
family:
  - lattice/M-SIS
  - DSA
scheme:
  - Falcon
scenario: static key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
possible countermeasures:
  - masking
  - algorithm change/sampler
target:
  - floating-point multiplication
  - sampler/Gaussian
techniques:
  - CPA
  - SPA
  - cryptanalysis
implementation source: Falcon-512 reference implementationusing traces generated with the ELMO simulator for Arm Cortex-M0 processor andChipWhisperer-Lite for Arm Cortex-M4 processor
---
# The Hidden Parallelepiped Is Back Again: Power Analysis Attacks on Falcon

