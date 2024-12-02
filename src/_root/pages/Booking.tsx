import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import { useToast } from "@/components/ui/use-toast";


const BookingValidation = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number is required" }),
  bookingDate: z.string().min(1, { message: "Booking date is required" }),
  yearOfStudy: z.string().min(1, { message: "Year of study is required" }), 
});

const Booking = () => {
  const form = useForm({
    resolver: zodResolver(BookingValidation), 
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    try {
      console.log("Form submitted:", data);
      toast({ title: "Booking Successful", description: "Your booking has been confirmed." });
      navigate("/payment"); 
    } catch (error) {
      toast({ title: "Error", description: "There was an issue with your booking.", variant: "destructive" });
    }
  };

  return (
    <div className="sm:w-420 flex-center flex-col">
      <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
        BOOKING FORM
      </h2>
      <p className="text-light-3 small-medium md:base-regular mt-2">
        Welcome to the Booking Form! Please enter your details.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col gap-5 w-full mt-4"
      >
        <div className="form-item">
          <label htmlFor="name" className="shad-form_label">Full Name</label>
          <Input
            id="name"
            type="text"
            className="shad-input"
            {...control.register("name")} 
          />
          {errors.name && <p className="text-red-500"></p>} 
        </div>

        
        <div className="form-item">
          <label htmlFor="email" className="shad-form_label">Email</label>
          <Input
            id="email"
            type="email"
            className="shad-input"
            {...control.register("email")}
          />
          {errors.email && <p className="text-red-500"></p>} 
        </div>

      
        <div className="form-item">
          <label htmlFor="phone" className="shad-form_label">Phone Number</label>
          <Input
            id="phone"
            type="text"
            className="shad-input"
            {...control.register("phone")}
          />
          {errors.phone && <p className="text-red-500"></p>} 
        </div>


        <div className="form-item">
          <label htmlFor="yearOfStudy" className="shad-form_label">Year Of Study</label>
          <Input
            id="yearOfStudy"
            type="text"
            className="shad-input"
            {...control.register("yearOfStudy")} 
          />
          {errors.yearOfStudy && <p className="text-red-500"></p>} 
        </div>

        <div className="form-item">
          <label htmlFor="bookingDate" className="shad-form_label">Preferred Booking Date</label>
          <Input
            id="bookingDate"
            type="date"
            className="shad-input"
            {...control.register("bookingDate")}
          />
          {errors.bookingDate && <p className="text-red-500"></p>} 
        </div>

        
        <Button type="submit" className="shad-button_primary">
          {isSubmitting ? (
            <div className="flex-center gap-2">
              <Loader /> Loading...
            </div>
          ) : (
            "Proceed to Payment"
          )}
        </Button>
      </form>
    </div>
  );
};

export default Booking;
