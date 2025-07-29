import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Textarea } from "../ui/textarea"
import Typography from "../shared/typography"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"

type ModalProp = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const aid_types = [
    {
        id: "1",
        name: "Quality Education",
        value: "quality_education",
    },
    {
        id: "2",
        name: "Quality Healthcare",
        value: "quality_healthcare",
    },
    {
        id: "3",
        name: "Advocacy & Empowerment",
        value: "advocacy_empowerment",
    },
    {
        id: "4",
        name: "Infrastructure Development",
        value: "infrastructure_development",
    },
]

export function GetAidModal({open, setOpen}: ModalProp) {
    const form = useForm({
        defaultValues: {
          first_name: "",
          last_name: "",
          type_of_aid: "",
          contact_info: "",
          description: "",
        },
        mode: "onChange",
      });
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <form>
        <DialogContent className="sm:max-w-[550px] xs:w-[80%] w-[95%] px-0 !rounded-[0.7rem] bg-white">
          <DialogHeader
            className="sm:px-12 px-4 py-4 space-y-3 border-b border-[#DB2777]"
          >
            <DialogTitle 
                className="text-[#DB2777]"
            >Get Aid</DialogTitle>
            <DialogDescription>
              Fill the form below with your details for special aid.
            </DialogDescription>
          </DialogHeader>
            <Form {...form}>
                <form className="sm:px-12 px-4">
                    <div className="no_scroll_display sm:max-h-[400px] max-h-[350px] flex flex-col justify-between lg:gap-6 gap-3 overflow-auto">
                        <FormField
                            control={form?.control}
                            name="first_name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>First name</FormLabel>
                                <FormControl className="py-2">
                                    <Input className="!py-6 text-gray-500 rounded-[0.5rem]" placeholder="Enter your first name" {...field} />
                                </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form?.control}
                            name="last_name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Last name</FormLabel>
                                <FormControl className="py-2">
                                    <Input className="!py-6 text-gray-500 rounded-[0.5rem]" placeholder="Enter your last name" {...field} />
                                </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form?.control}
                            name="type_of_aid"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type of Aid</FormLabel>
                                    <Select
                                        value={field.value}
                                        onValueChange={(value) => field.onChange(value)}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="w-full py-6 rounded-[0.5rem] !text-gray-600 border-gray-500">
                                                <SelectValue placeholder="Select your aid type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="!py-2 text-gray-800 border-gray-500 rounded-[0.5rem] bg-white">
                                            <SelectGroup
                                                className=""
                                            >
                                                <SelectLabel>Products</SelectLabel>
                                                {aid_types.map((product) => (
                                                    <SelectItem
                                                        key={product.id} 
                                                        value={product.id}
                                                    >
                                                        {product.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col gap-2">
                            <Typography
                                typo="body-large-semibold"
                                className="text-[#DB2777]"
                            >Contact information</Typography>
                            <div className="px-4 flex flex-col gap-3">

                                <FormField
                                    control={form?.control}
                                    name="contact_info"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl className="py-2">
                                            <Input className="!py-6 text-gray-500 rounded-[0.5rem]" placeholder="Enter your contact information" {...field} />
                                        </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form?.control}
                                    name="contact_info"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Phone number</FormLabel>
                                        <FormControl className="py-2">
                                            <Input className="!py-6 text-gray-500 rounded-[0.5rem]" placeholder="Enter your contact information" {...field} />
                                        </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>

                        </div>
                        <FormField
                            control={form?.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl className="py-2">
                                    <Textarea  
                                        className="!py-6 text-gray-500 rounded-[0.5rem]" 
                                        placeholder="Type your message here" 
                                        {...field} 
                                        rows={5}
                                    />
                                </FormControl>
                                </FormItem>
                            )}
                        />
                        
                    </div>
                <DialogFooter
                    className="py-4"
                >
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full !py-7 text-white !rounded-[0.5rem]"
                    >Submit</Button>
                </DialogFooter>
                </form>
            </Form>
        </DialogContent>
      </form>
    </Dialog>
  )
}
