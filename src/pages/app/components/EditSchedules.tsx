import { LuPlus } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

const schedules = [
  {
    day: "mon",
    availableHours: [{ from: "09:00", to: "09:30" }],
  },
  {
    day: "tue",
    availableHours: [
      { from: "09:00", to: "09:30" },
      { from: "10:30", to: "11:00" },
    ],
  },
  {
    day: "wed",
    availableHours: [
      { from: "09:00", to: "09:30" },
      { from: "10:30", to: "11:00" },
    ],
  },
  {
    day: "thu",
    availableHours: [{ from: "09:30", to: "09:30" }],
  },
  {
    day: "fri",
    availableHours: [{ from: "09:30", to: "09:30" }],
  },
  {
    day: "sat",
    availableHours: [{ from: "09:30", to: "09:30" }],
  },
  {
    day: "sun",
    availableHours: [{ from: "09:30", to: "09:00" }],
  },
];

const timeStamps = [
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
];

// console.log(schedules[0]["fri"]);

export default function EditSchedules() {
  return (
    <Container>
      <Heading>Weekly hours</Heading>
      <GridCol>
        {schedules.map((schedule, index) => {
          const { day, availableHours } = schedule;

          return (
            <FlexRol key={index}>
              <CheckBox type="checkbox" />
              <Span>{day}</Span>
              <InputFlex>
                {availableHours.map((hour) => {
                  return (
                    <div>
                      <Select value={hour.from}>
                        {timeStamps.map((timeStamp) => (
                          <option>{timeStamp}</option>
                        ))}
                      </Select>
                      <Span>-</Span>
                      <Select value={hour.to}>
                        {timeStamps.map((timeStamp) => (
                          <option>{timeStamp}</option>
                        ))}
                      </Select>
                    </div>
                  );
                })}
              </InputFlex>
              <Button>
                <MdClose size={20} />
              </Button>
              <Button>
                <LuPlus size={20} />
              </Button>
            </FlexRol>
          );
        })}
      </GridCol>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--color-gray-50);
`;

const GridCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-block: 3rem;
  gap: 3rem;
`;

const FlexRol = styled.div`
  display: grid;
  grid-template-columns: auto 3rem 1fr auto auto;
  /* align-items: center; */
  gap: 3rem;
  /* justify-content: space-between; */
`;

const CheckBox = styled.input`
  height: 2rem;
  aspect-ratio: 1/1;
  accent-color: var(--color-primary);

  &:hover {
    cursor: pointer;
  }
`;

const Select = styled.select`
  height: 4rem;
  width: 8rem;
  margin-inline: 1rem;
  border: 0.1rem solid #777;
  border-radius: 3px;
`;

const Heading = styled.h2``;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  height: 3rem;
  justify-content: center;
  padding: 1.2rem;
  border: 0;
  background: 0;

  &:hover {
    background-color: var(--color-gray-100);
  }
`;

const Span = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const InputFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
