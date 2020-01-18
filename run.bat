@echo off
echo ------------------------------------------------------------------------------
echo ------------------------Quick Runner For Windows-------------------------------
echo -----------------------%date% %time%----------------------------
echo ------------------------------------------------------------------------------
echo 1 npm run dev
echo 2 npm run build:prod 
echo 3 npm install
echo 4 cnpm install 
set /p ID=[please enter key] : 
if %ID%==1 (
	echo -------------------------------Loading--------------------------------------
	npm run dev
	
) else if %ID%==2 (
	echo -------------------------------Start--------------------------------------
	npm run build:prod 
	echo --------------------------------End---------------------------------------
	echo npm build has been done , press any key to exit
	pause>nul
) else if %ID%==3 (
	echo -------------------------------Start--------------------------------------
	npm install
	echo --------------------------------End---------------------------------------
	echo npm install has been done , press any key to exit
	pause>nul
) else if %ID%==4 (
	echo -------------------------------Start--------------------------------------
	cnpm install 
	echo --------------------------------End---------------------------------------
	echo cnpm install has been done , press any key to exit
	pause>nul	
) else (
	echo warning: invalid key [press any key to exit]
	pause>nul
)
