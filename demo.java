/**
 * demo
 */
public class demo {

    public static void main(String[] args) {

        String phoneNumber = "++6377888688";
        String regex = "^(\\+)?\\d{10,12}$";
        System.out.println( phoneNumber.matches(regex)); 

        
        String cleanedNumber = phoneNumber.replaceAll("[^0-9]", "");
        System.out.println(cleanedNumber);

        if (!(phoneNumber.startsWith("046") || phoneNumber.startsWith("84"))) {
            String phoneCode = "84";
            phoneNumber = phoneCode + phoneNumber.substring(1);
        }

        if (!(cleanedNumber.startsWith("046") || cleanedNumber.startsWith("84"))) {
            String phoneCode = "84";
            cleanedNumber = phoneCode + cleanedNumber.substring(1);
        }
        System.out.println(phoneNumber);
        System.out.println(cleanedNumber);

        
    }
}