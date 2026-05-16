public class CarsAssemble {

    public double productionRatePerHour(int speed) {
        double rate = 1.0;
        
        if (speed >= 1 && speed <= 4) {
            rate = 1.0;
        } else if (speed >= 5 && speed <= 8) {
            rate = 0.9;
        } else if (speed == 9) {
            rate = 0.8;
        } else if (speed == 10) {
            rate = 0.77;
        }
        
        return speed * 221 * rate;
    }

    public int workingItemsPerMinute(int speed) {
        // Reuse the hourly rate and divide by 60 minutes
        return (int) (productionRatePerHour(speed) / 60);
    }
}