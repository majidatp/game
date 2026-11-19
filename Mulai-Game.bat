@echo off
title Petualangan Sahabat Nusantara
echo ========================================================
echo   Memulai Petualangan Sahabat Nusantara...
echo ========================================================

:: Pastikan server berjalan di background
powershell -Command "if (-not (Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue)) { Start-Process node -ArgumentList 'server.js' -WindowStyle Hidden }"

:: Tunggu 1 detik agar server siap
timeout /t 1 /nobreak >nul

:: Buka dalam jendela aplikasi mandiri (PWA Mode)
start msedge --app=http://localhost:3000/ || start chrome --app=http://localhost:3000/ || start http://localhost:3000/

echo Game telah dibuka di jendela khusus!
