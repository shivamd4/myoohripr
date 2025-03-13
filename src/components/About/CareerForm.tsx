"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { position } from "../../../constants/job-positions";

const CareerForm = () => {
  return (
    <div className="mt-10 flex flex-col gap-y-8 items-center w-full">
      <div className="flex flex-col gap-y-2.5 w-full md:w-[60%]">
        <Label className="ml-1.5">Name</Label>
        <Input placeholder="Enter your name" />
      </div>
      <div className="flex flex-col gap-y-2.5 w-full md:w-[60%]">
        <Label className="ml-1.5">Email</Label>
        <Input placeholder="Enter your email" />
      </div>
      <div className="flex flex-col gap-y-2.5 w-full md:w-[60%]">
        <Label className="ml-1.5">Phone Number</Label>
        <Input placeholder="Enter your phone number" />
      </div>
      <div className="flex flex-col gap-y-2.5 w-full md:w-[60%]">
        <Label className="ml-1.5">Qualification</Label>
        <Input placeholder="Enter your qualification" />
      </div>
      <div className="flex flex-col gap-y-2.5 w-full md:w-[60%]">
        <Label className="ml-1.5">Position</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select position" />
          </SelectTrigger>
          <SelectContent>
            {position.map((item) => {
              return (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <div className="w-[60%]">
        <Button variant={"primary"}>SUBMIT</Button>
      </div>
    </div>
  );
};

export default CareerForm;
