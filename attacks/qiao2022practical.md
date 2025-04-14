---
source: https://ieeexplore.ieee.org/abstract/document/9924203
year: 2023
authors: Zehua Qiao, Yuejun Liu, Yongbin Zhou, Jingdian Ming, Chengbin Jin, Huizhong Li
family:
  - lattice/M-LWE
  - lattice/M-SIS
  - DSA
scheme:
  - Dilithium
scenario: static key
leaked: secret key (part)
implementation:
  - SW
  - masked
adversarial:
  - observe
  - profile without clone
possible countermeasures:
  - randomization/time delays
  - optimization
target:
  - packing/y
techniques:
  - profiling/template
---
# Practical Public Template Attacks on CRYSTALS-Dilithium With Randomness Leakages