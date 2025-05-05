import ReCAPTCHA from "react-google-recaptcha";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios, { AxiosError } from "axios";

import Section from "@/components/Section";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactInformationBox from "@/components/ContactInformationBox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [captchaDone, setCaptchaDone] = useState(false);
  const [service, setService] = useState("");

  const contactUsValidator = z.object({
    name: z
      .string({ required_error: "Name is required" })
      .trim()
      .min(1, { message: "Please fill in the name field" }),
    email: z
      .string({ required_error: "Name is required" })
      .email({ message: "Please enter a valid email" }),
    phone: z
      .string({ required_error: "Name is required" })
      .trim()
      .min(10, { message: "Phone number must be 10 digits long" })
      .max(10, { message: "Phone number must be 10 digits long" }),
    message: z.string().optional(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof contactUsValidator>>({
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      message: "",
    },
  });

  const onChange = () => {
    setCaptchaDone(true);
  };

  const { mutate: handleContact, isPending } = useMutation({
    mutationKey: ["contact"],
    mutationFn: async (values: z.infer<typeof contactUsValidator>) => {
      if (!captchaDone) {
        throw new Error("Please fill the captcha");
      }
      if (service === "") {
        throw new Error("Please select a service");
      }

      const { data } = await axios.post("https://formspree.io/f/meqydbvd", {
        ...values,
        service,
      });
      return data;
    },
    onSuccess: () => {
      setCaptchaDone(false);
      setService("");
      toast.success("Form submitted successfully");
      reset();
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.data.error) {
        toast.error(error.response.data.error);
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Some error occured. Please try again later!");
      }
    },
  });
  return (
    <Section>
      <Title>Contact Us</Title>

      <div className="mt-10 flex flex-col xl:flex-row items-center gap-y-8 justify-center w-full">
        <form
          onSubmit={handleSubmit((data) => handleContact(data))}
          className="flex flex-col gap-y-8 items-center w-full xl:w-[50%]"
        >
          <div className="flex flex-col gap-y-2.5 w-[70%]">
            <Label className="ml-1.5" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              type="text"
              required
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-rose-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2.5 w-[70%]">
            <Label className="ml-1.5" htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-rose-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2.5 w-[70%]">
            <Label className="ml-1.5" htmlFor="phone">
              Phone Number
            </Label>
            <Input
              type="number"
              required
              id="phone"
              placeholder="Enter your phone number"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <p className="text-rose-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2.5 w-[70%]">
            <Label className="ml-1.5" htmlFor="service">
              Service
            </Label>
            <Select onValueChange={(value) => setService(value)}>
              <SelectTrigger id="service">
                <SelectValue placeholder="Select a serivce" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Patent Illustration">
                  Patent Illustration
                </SelectItem>
                <SelectItem value="Invention Search">
                  Invention Search
                </SelectItem>
                <SelectItem value="Chemical Structure or Gene Sequence">
                  Chemical Structure or Gene Sequence
                </SelectItem>
                <SelectItem value="Filing Related Services">
                  Filing Related Services
                </SelectItem>
                <SelectItem value="Invention Drafting">
                  Invention Drafting
                </SelectItem>
                <SelectItem value="Trademark">Trademark</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-y-2.5 w-[70%]">
            <Label className="ml-1.5" htmlFor="message">
              Message
            </Label>
            <Textarea
              placeholder="Type your message..."
              id="message"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-rose-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <div className="w-[70%]">
            <ReCAPTCHA
              sitekey={"6Le9DOEpAAAAADELquj2rO-dbTIcKRfxY0XeRcMq"}
              onChange={onChange}
            />
          </div>

          <div className="w-[70%]">
            <Button variant={"primary"} type="submit" disabled={isPending}>
              {isPending ? "Please wait..." : "SUBMIT"}
            </Button>
          </div>
        </form>

        <div className="w-full flex flex-col justify-center items-center xl:w-[30%]">
          <Tabs defaultValue="india" className="w-[400px]">
            <TabsList className="w-full justify-between">
              <TabsTrigger value="india">India Office</TabsTrigger>
              <TabsTrigger value="california">California Office</TabsTrigger>
              <TabsTrigger value="virginia">Virginia Office</TabsTrigger>
            </TabsList>
            <TabsContent value="india" className="flex flex-col gap-y-2">
              <ContactInformationBox
                location="Suit-102, Dehradun, Uttarakhand India, 248001"
                phone="+91 60063-75267"
                emails={["ipr@myoohr.com", "martin_reed@myoohr.com"]}
              />
              <div
                style={{
                  textDecoration: "none",
                  overflow: "hidden",
                  maxWidth: "100%",
                  width: "400px",
                  height: "300px",
                }}
                className="rounded-md"
              >
                <div
                  id="gmap-canvas"
                  style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                >
                  <iframe
                    style={{ height: "100%", width: "100%", border: 0 }}
                    frameBorder={0}
                    src="https://www.google.com/maps/embed/v1/place?q=Dehradun,+Uttarakhand,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  />
                </div>
                <a
                  className="embed-map-html"
                  href="https://www.bootstrapskins.com/themes"
                  id="get-data-for-embed-map"
                >
                  premium bootstrap themes
                </a>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "#gmap-canvas img{max-height:none;max-width:none!important;background:none!important;}",
                  }}
                />
              </div>
            </TabsContent>
            <TabsContent value="california" className="flex flex-col gap-y-2">
              <ContactInformationBox
                location="2931 Hickory Place, Fullerton, California 92835,United States"
                phone="+1 7148685533"
                emails={["ipr@myoohr.com", "mike@myoohr.com"]}
              />
              <div
                style={{
                  textDecoration: "none",
                  overflow: "hidden",
                  maxWidth: "100%",
                  width: "400px",
                  height: "300px",
                }}
                className="rounded-md"
              >
                <div
                  id="gmap-canvas"
                  style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                >
                  <iframe
                    style={{ height: "100%", width: "100%", border: 0 }}
                    frameBorder={0}
                    src="https://www.google.com/maps/embed/v1/place?q=2931+Hickory+Place,+Fullerton,+California+92835,United+States&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  />
                </div>
                <a
                  className="embed-map-html"
                  href="https://www.bootstrapskins.com/themes"
                  id="get-data-for-embed-map"
                >
                  premium bootstrap themes
                </a>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "#gmap-canvas img{max-height:none;max-width:none!important;background:none!important;}",
                  }}
                />
              </div>
            </TabsContent>
            <TabsContent value="virginia" className="flex flex-col gap-y-2">
              <ContactInformationBox
                location="7297 Lee Highway Falls Church, VA 22042"
                phone="+1 7148807279"
                emails={["ipr@myoohr.com", "matthew@myoohr.com"]}
              />
              <div
                style={{
                  maxWidth: "100%",
                  listStyle: "none",
                  transition: "none",
                  overflow: "hidden",
                  width: "400px",
                  height: "300px",
                }}
                className="rounded-md"
              >
                <div
                  id="embed-map-canvas"
                  style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                >
                  <iframe
                    style={{ height: "100%", width: "100%", border: 0 }}
                    frameBorder={0}
                    src="https://www.google.com/maps/embed/v1/place?q=7297+Lee+Highway+Falls+Church,+VA+22042&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  />
                </div>
                <a
                  className="googlecoder"
                  href="https://www.bootstrapskins.com/themes"
                  id="grab-map-authorization"
                >
                  premium bootstrap themes
                </a>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "#embed-map-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}",
                  }}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;
