/*
http://arduino.cc/en/Reference/KeyboardModifiers
*/

const int LED = 13;
const int BUTTON = 7;
int keyChain = 0;
bool isLogin = false;

void setup()
{
  pinMode(LED, OUTPUT);
  pinMode(BUTTON, INPUT);
  Keyboard.begin();
}

void loop()
{
  keyChain = digitalRead(BUTTON);

  if (keyChain == LOW && isLogin == true)
  {
    digitalWrite(LED, LOW);
    //Keyboard.press('N');
    Keyboard.press(KEY_LEFT_SHIFT);
    Keyboard.press(KEY_END);
    delay(10);
    isLogin = false;
    Keyboard.releaseAll();
  }
  else if (keyChain == HIGH && isLogin == false)
  {
    digitalWrite(LED, HIGH);
    //Keyboard.press('H');
    Keyboard.press(KEY_LEFT_SHIFT);
    Keyboard.press(KEY_HOME);
    delay(10);
    isLogin = true;
    Keyboard.releaseAll();
  }
}
