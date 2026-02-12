public class Lasagna {
    // TODO: define the 'expectedMinutesInOven()' method
    public static int expectedMinutesInOven(){
        return 40;
    }

    

    public static int remainingMinutesInOven(int current){
        return expectedMinutesInOven() - current;
    }
    
    public static int preparationTimeInMinutes(int layers){
        return 2 * layers;
    }


    public static int totalTimeInMinutes(int layers, int current){
        return (current+ preparationTimeInMinutes(layers));
    }
}
