# Fatty Liver Clinic: phone app (home-screen version)

Open https://drmahmouddesoky.github.io/fatty-liver-clinic/ on a phone and add it to the home screen.

- This folder contains the program only. No patient data are ever stored here or sent here.
- After the first visit the app works offline. Patients are kept only on the phone, behind a 4-digit PIN,
  and move to the clinic laptop only as a password-locked sync file (AirDrop or cable).
- The app is locked: this page holds it only in encrypted form and asks for an access code, which the clinic gives
  to invited clinicians. The code is not stored in these files.
- These files are built from the private Fatty Liver Clinic source (`npm run build:pwa` with the access code). Do not edit them by hand.
