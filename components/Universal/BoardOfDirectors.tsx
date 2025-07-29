import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const boardMembers = [
  {
    name: "Maria Cattaui",
    image: "https://opensocietyfoundations.imgix.net/uploads/0620467c-74a7-423d-8738-8ffe77e2b0ad/cattaui-maria-009-2200.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=442%2C0%2C1415%2C1414",
    role: "Board Member",
    para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac tincidunt tortor. Integer vel lacinia nisi. Vivamus in facilisis urna, at imperdiet justo. Curabitur tristique vehicula ligula eu pretium. Pellentesque et mi euismod, facilisis libero at, efficitur purus.",
    para2: "Quisque euismod euismod sapien, at efficitur ligula. Sed ultrices, elit sit amet tristique aliquet, nulla sapien fermentum magna, ac fermentum sapien sem sit amet eros. Nullam sed ultricies nisi. Aenean ac magna at magna iaculis dictum. Donec dapibus, neque at aliquet convallis, ante quam interdum magna, nec viverra purus enim eu sapien.",
    para3: "Phasellus vitae odio ultricies, viverra nunc ut, laoreet libero. Nam in ipsum felis. Pellentesque non augue non metus malesuada ullamcorper at vitae leo. Proin scelerisque est a nulla luctus, ut lobortis lorem cursus. Cras eu mauris ac dui efficitur venenatis. Vestibulum placerat, sem at dapibus viverra, nisi purus scelerisque dolor, sit amet facilisis leo ex nec nunc.",
  },
  {
    name: "John Doesons",
    image: "https://opensocietyfoundations.imgix.net/uploads/9823c563-a1d5-49f7-a24c-dc3ec40d44af/soros-colombel-andrea-008-2200.jpg?auto=compress%2Cformat&fit=min&fm=jpg&h=360&q=80&rect=0%2C0%2C2200%2C1414&w=560",
    role: "Chairman",
    para1: "Sed auctor ligula eu velit euismod, ac feugiat nisi suscipit. Duis feugiat metus vitae nulla scelerisque, id ullamcorper lacus efficitur. Integer tempor, nulla in auctor vehicula, leo urna gravida mi, non convallis odio orci vitae eros. Curabitur bibendum, urna sed interdum efficitur, lorem ipsum aliquet felis, in maximus enim neque vitae lorem.",
    para2: "Mauris vehicula purus a felis posuere, nec dictum neque euismod. Phasellus a suscipit ligula. Integer condimentum pharetra magna. Morbi finibus leo vitae lorem tristique, ac volutpat dui fermentum. Aliquam erat volutpat. Donec vel diam ac sapien volutpat volutpat. Curabitur dignissim urna id mauris suscipit gravida.",
    para3: "Duis facilisis magna sit amet nulla laoreet, eu tincidunt augue sagittis. Morbi eget feugiat purus. Fusce euismod viverra sapien, sit amet auctor ipsum tincidunt vel. Donec consectetur bibendum tortor ac tincidunt. Pellentesque fringilla tristique dui, vel volutpat enim condimentum vitae. Nullam luctus vehicula nisi, vel consectetur nunc euismod at.",
  },
  {
    name: "Alice Johnson",
    image: "https://opensocietyfoundations.imgix.net/uploads/93c7e1e6-c50f-48af-8dd7-d87fa9306db5/krastev-ivan-005-2200.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=398%2C0%2C1415%2C1414",
    role: "Secretary",
    para1: "Nunc aliquet lorem ac maximus placerat. Nam ut erat a elit vestibulum malesuada. Integer in mauris sed dui dapibus varius. Mauris in magna eu justo maximus facilisis. Ut ut diam id sem consequat sollicitudin. Vestibulum vel ligula vitae leo convallis suscipit ut nec dui. Aliquam erat volutpat. Nunc et arcu mauris.",
    para2: "Phasellus sit amet nisl ut justo volutpat vehicula. Curabitur sit amet libero non ligula tincidunt malesuada. Donec vehicula erat ac sapien condimentum placerat. Integer ullamcorper libero non nisi feugiat iaculis. In a cursus ante. Suspendisse potenti. Curabitur euismod augue ac efficitur lobortis.",
    para3: "Donec tempus felis ac lorem congue, vitae auctor nunc viverra. Integer mollis augue eget velit consequat, eu tristique nunc posuere. Etiam eget nisi quis nisl dictum fermentum. Sed fringilla nibh in vehicula dictum. Maecenas porttitor volutpat nibh. Cras at nisi nec neque dapibus eleifend.",
  },
  {
    name: "Michael Smith",
    image: "https://opensocietyfoundations.imgix.net/uploads/d622e207-44c9-40cb-9383-46c19edeff24/20171005-heyfron-soros-alex-047-3000.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=921%2C195%2C1409%2C1405",
    role: "Treasurer",
    para1: "Morbi congue tincidunt libero. Sed sit amet libero ac lectus posuere varius. Nulla facilisi. Aliquam quis ex vitae arcu convallis vulputate ac in magna. Integer tempor lorem a sem tincidunt, a placerat lorem aliquam. Integer vestibulum eros id dictum tincidunt. Nunc nec vestibulum elit.",
    para2: "Sed facilisis magna id velit lacinia, ac iaculis ligula pharetra. Cras sit amet orci ut nisi rhoncus interdum. Vivamus eu urna vitae tortor iaculis auctor non sed felis. Duis efficitur odio vitae nunc suscipit, id elementum neque gravida. Proin fermentum velit eu elit gravida, ut eleifend odio consequat.",
    para3: "Nam tempor vestibulum mollis. Sed facilisis, urna nec scelerisque dictum, felis ante tristique mi, ac laoreet orci lorem ut nisi. Aenean faucibus est nec efficitur tincidunt. Nam suscipit lacus in ante gravida facilisis. Integer vel augue ac nisl iaculis faucibus. Cras auctor leo in nisi consequat suscipit.",
  }
];

const BoardOfDirectors = () => {
  return (
    <div>
      {boardMembers.map((member, index) => (
        <Sheet key={index}>
          <SheetTrigger className="w-full">
            <div className="flex border-b border-gray-300 px-6 py-8 space-x-[500px]">
              <div className="text-xl font-bold">{member.name}</div>
              <div className="flex items-center ml-4 justify-center">
                <Avatar className="w-14 h-14 overflow-hidden">
                  <AvatarImage src={member.image} />
                </Avatar>
                <div className="text-base ml-[6rem]">{member.role}</div>
              </div>
            </div>
          </SheetTrigger>
          <SheetContent style={{ width: '50vw', overflowY: 'auto' }} className="bg-white !w-[50vw] max-w-[1200px]">
            <SheetHeader>
              <SheetDescription>
                <div>
                  <div className="flex flex-col">
                    <div className="md:flex-shrink-0">
                      <Image
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src={member.image}
                        alt={member.name}
                        width={1920}
                        height={1080}
                        layout="responsive"
                      />
                    </div>
                    <div className="pt-8">
                      <div className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">
                        {member.role}
                      </div>
                      <h1 className="block mt-1 text-xl leading-tight font-medium text-black">
                        {member.name}
                      </h1>
                      <div className="space-y-10 font-normal text-lg">
                        <p className="mt-2 text-gray-500">{member.para1}</p>
                        <p className="mt-2 text-gray-500">{member.para2}</p>
                        <p className="mt-2 text-gray-500">{member.para3}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};

export default BoardOfDirectors;
