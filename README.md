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

You need to make sure the directories with `ant.bat` and `android.bat` are in your
path, these are mine:

  C:\Users\Jason\AppData\Local\Android\apache-ant-1.9.4\bin
  C:\Users\Jason\AppData\Local\Android\android-studio\sdk\tools

If you have any trouble, try installing sun's JDK:
  
  http://www.oracle.com/technetwork/java/javase/downloads/index.html

And set these environment variables:

  JAVA_HOME pointing to the SDK directory
  ANDROID_HOME pointing to the ...\android-studio\sdk directory

You should be able to run these commands from the command line and see something:

  ant
  javac
  android
  

ios
===========

Ios needs to be compiled on a mac with XCode installed.  It's a free download from
the mac app store.  Make sure you can compile a sample iphone app and deploy it to
your phone and in the emulator and I think you should be fine.

