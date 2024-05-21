import { HiOutlineDotsVertical } from "react-icons/hi";
import Menus from "../../../components/Menus";

export default function Appointments() {
  return (
    <div>
      <Table />
    </div>
  );
}

function Table() {
  return (
    <div>
      <div className="grid justify-between items-center mb-6">
        <h3 className="text-xl font-medium">My Appointments</h3>
        <div></div>
      </div>
      <div className="overflow-hidden rounded-lg w-full border border-stone-300">
        <table className="p-3 w-full text-left border-collapse">
          <thead>
            <tr className="">
              <th className="uppercase text-sm font-semibold p-3">Date</th>
              <th className="uppercase text-sm font-semibold p-3">Guest</th>
              <th className="uppercase text-sm font-semibold p-3">Duration</th>
              <th className="uppercase text-sm font-semibold p-3">status</th>
              <th className="uppercase text-sm font-semibold p-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white border-collapse">
            <tr>
              <td className="p-3 flex items-center gap-6">
                <span className="inline-block h-6 w-6 rounded-full bg-yellow-300"></span>
                <span className="flex flex-col">
                  <span className="text-md font-medium">Today</span>
                  <span className="text-sm font-medium text-stone-500">
                    10:30am → 10:45am
                  </span>
                </span>
              </td>
              <td className="p-3 ">
                <span className="text-md font-medium flex flex-col">
                  Adeleke Muyideen
                </span>
                <span className="text-sm text-stone-600">
                  muyideeenadele@gmail.com
                </span>
              </td>
              <td className="p-3 text-sm font-medium">15 mins</td>
              <td className="p-3 text-sm font-medium">
                <span className="w-fit uppercase text-xs font-semibold px-3 py-1.5 rounded-3xl bg-green-300">
                  Confirmed
                </span>
              </td>
              <td className="p-4 text-sm font-medium">
                <Menus>
                  <Menus.Toggle id="me"></Menus.Toggle>
                  <Menus.List id="me">
                    <ul className="bg-white">
                      <li>
                        <button className="px-4 py-1.5 text-md">
                          See details
                        </button>
                      </li>
                      <li>
                        <button className="px-4 py-1.5 text-md">Confirm</button>
                      </li>
                    </ul>
                  </Menus.List>
                </Menus>
              </td>
            </tr>
            {/* tr - 2 */}
            <tr className="divide">
              <td className="p-3 flex items-center gap-6">
                <span className="inline-block h-6 w-6 rounded-full bg-yellow-300"></span>
                <span className="flex flex-col">
                  <span className="text-md font-medium">May 27 2024</span>
                  <span className="text-sm font-medium text-stone-500">
                    11:45am → 12:30am
                  </span>
                </span>
              </td>
              <td className="p-4 ">
                <span className="text-md font-medium flex flex-col">
                  Yusuf Balogun
                </span>
                <span className="text-sm text-stone-600">
                  balogunyusuf@gmail.com
                </span>
              </td>
              <td className="p-4 text-sm font-medium">45 mins</td>
              <td className="p-4 text-sm font-medium">
                <span className="w-fit uppercase text-xs font-semibold px-3 py-1.5 rounded-3xl bg-blue-300">
                  scheduled
                </span>
              </td>
              <td className="p-4 text-sm font-medium">
                <button className="cursor-pointer">
                  <HiOutlineDotsVertical size={24} />
                </button>
              </td>
            </tr>
            {/* tr - 2 */}
            <tr className="divide">
              <td className="p-3 flex items-center gap-6">
                <span className="inline-block h-6 w-6 rounded-full bg-yellow-300"></span>
                <span className="flex flex-col">
                  <span className="text-md font-medium">May 30 2024</span>
                  <span className="text-sm font-medium text-stone-500">
                    12:45pm → 01:15pm
                  </span>
                </span>
              </td>
              <td className="p-4 ">
                <span className="text-md font-medium flex flex-col">
                  Gideon Chukwudi
                </span>
                <span className="text-sm text-stone-600">
                  gideonthedon@gmail.com
                </span>
              </td>
              <td className="p-4 text-sm font-medium">30 mins</td>
              <td className="p-4 text-sm font-medium">
                <span className="w-fit uppercase text-xs font-semibold px-3 py-1.5 rounded-3xl bg-orange-300">
                  pending
                </span>
              </td>
              <td className="p-4 text-sm font-medium">
                <button className="cursor-pointer">
                  <HiOutlineDotsVertical size={24} />
                </button>
              </td>
            </tr>
            <tr className="divide">
              <td className="p-3 flex items-center gap-6">
                <span className="inline-block h-6 w-6 rounded-full bg-yellow-300"></span>
                <span className="flex flex-col">
                  <span className="text-md font-medium">May 5 2024</span>
                  <span className="text-sm font-medium text-stone-500">
                    9:45am → 10:00am
                  </span>
                </span>
              </td>
              <td className="p-4 ">
                <span className="text-md font-medium flex flex-col">
                  Olanredwaju Adam
                </span>
                <span className="text-sm text-stone-600">
                  lanreadam@gmail.com
                </span>
              </td>
              <td className="p-4 text-sm font-medium">15 mins</td>
              <td className="p-4 text-sm font-medium">
                <span className="w-fit uppercase text-xs font-semibold px-3 py-1.5 rounded-3xl bg-teal-300">
                  completed
                </span>
              </td>
              <td className="p-4 text-sm font-medium">
                <button className="cursor-pointer">
                  <HiOutlineDotsVertical size={24} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
