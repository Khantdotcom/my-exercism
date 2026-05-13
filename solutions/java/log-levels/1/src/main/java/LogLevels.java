public class LogLevels {
    
    public static String message(String logLine) {
        String[] s = logLine.split(": ",2);
        return s[1].trim();
    }

    public static String logLevel(String logLine) {
        String[] s = logLine.split(": ",2);
        String a = s[0];
        return a.substring(1, a.length() - 1).toLowerCase();
    }

    public static String reformat(String logLine) {
        String a = message(logLine);
        String b = logLevel(logLine);
        String result = a + " (" + b + ")";
        return result;
    }
}
