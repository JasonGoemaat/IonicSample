IonicSample
===========

This is a sample app I created to learn and show the features of the Ionic Framework:
http://ionicframework.com/

You need node installed, if you can't type "npm" from your command line go to nodejs.org
and install node.  Then type this command to install ionic and cordova:

  npm install ionic cordova
  
The .gitignore file keeps the platforms and plugins directories from getting added
to source control, so you will need to add those plugins the first time you clone
this repository.  Run these commands in the root directory:

  cordova plugin add org.apache.cordova.device
  cordova plugin add org.apache.cordova.console
  cordova plugin add com.ionic.keyboard

After that you should be able to run `ionic serve` and see the project in a web browser.


Android
===========

Building for android requires the Android SDK to be installed, I installed Android
Studio with the SDK from here:

  https://developer.android.com/sdk/installing/studio.html

You also need to install ant from here:

  http://ant.apache.org/

You need to make sure the directories with `ant.bat`, `android.bat` (and adb.exe
probably) are in your path, these are mine:

  C:\Users\Jason\AppData\Local\Android\apache-ant-1.9.4\bin
  C:\Users\Jason\AppData\Local\Android\android-studio\sdk\tools
  C:\Users\Jason\AppData\Local\Android\android-studio\sdk\platform-tools

If you have any trouble, try installing sun's JDK:
  
  http://www.oracle.com/technetwork/java/javase/downloads/index.html

And set these environment variables:

  JAVA_HOME pointing to the SDK directory
  ANDROID_HOME pointing to the ...\android-studio\sdk directory

You should be able to run these commands from the command line and see something:

  ant
  javac
  android

You may need to run 'android' and install some things, like 'Android 4.4.2 (API 19)'
which has the files for developing with that version of android.

To run on a device you need to do several things.  First install the
'Google USB Driver' with the android tool above which actually installs only the 
installation files, then go to the 'sdk\extras\google\usb_driver' directory and
right-click on the '.inf' file to install it.

Starting with android 4.2, you need to enable developer options by going to the
about page in settings and tapping the bottom entry "Build Number" seven times,
then you will see a new "Developer Options" entry in settings where you can 
enable "USB debugging".  After that you should be able to run "adb devices"
in the command line and see your device attached.  If not, try going to
storage under settings and hitting the three dots in the header at the top
right (under the time) and picking 'USB Connection', then change it to 
connect as a 'Camera (PTP)' instead of 'Media device (MTP)' (or possibly
the other way).  If you use a different device you may have to reinstall
the google usb driver, or go to the device in your device manager and update
the driver from there using the downloaded one.

If 'adb devices' shows it is unauthorized, you may need to set an
ANDROID_SDK_HOME directory to where your SDK is, and check the device for
a message asking you to authorize your computer.  Try disabling and
re-enabling USB debugging as well.

If you want to change the api version, edit platforms\android\CordovaLib\project.properties
and change this line:

  target=android-19

To use the emulator you need to define a device to emulate.  Run 'android.bat' and
select Tools->Manage AVDs.  Here you can create an android virtual device the emulator
can use.

ios
===========

Ios needs to be compiled on a mac with XCode installed.  It's a free download from
the mac app store.  Make sure you can compile a sample iphone app and deploy it to
your phone and in the emulator and I think you should be fine.

