
export class CustomRegex {
    public static onlyText = '[a-zA-Z]*';
    public static username = '^[a-zA-Z ]*$';
    public static email = '^[a-zA-Z0-9.-]+@[a-zA-Z0-9-.]+\\.[a-zA-Z]{2,5}$';
    public static phoneNumber = '^(\+[0-9]{1,3})?[0-9]{6,14}$';
    public static updateEmail = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,9}))$/';
    public static password = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}$'
  }
