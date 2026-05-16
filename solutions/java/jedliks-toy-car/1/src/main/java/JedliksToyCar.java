public class JedliksToyCar {
    public int meter = 0;
    public int battery = 100;

    public static JedliksToyCar buy() {
        return new JedliksToyCar();
    }

    public String distanceDisplay() {
        // Java automatically converts 'meter' to a String here
        return "Driven " + meter + " meters";
    }

    public String batteryDisplay() {
        // Removed the invalid cast and fixed the stray ')' at the end
        if (battery == 0) {
            return "Battery empty";
        }
        return "Battery at " + battery + "%";
    }

    public void drive() {
        // The car can only drive if it has battery power remaining
        if (battery > 0) {
            meter = meter + 20;
            battery = battery - 1;
        }
    }
}