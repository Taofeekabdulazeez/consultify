import { LuPlus } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

const schedules = [
  {
    mon: [{ from: "09:00", to: "09:30" }],
  },
  {
    tue: [
      { from: "09:30", to: "09:30" },
      { from: "10:30", to: "11:00" },
    ],
  },
  {
    wed: [
      { from: "09:30", to: "09:30" },
      { from: "10:30", to: "11:00" },
    ],
  },
  {
    thu: [{ from: "09:30", to: "09:30" }],
  },
  {
    fri: [{ from: "09:30", to: "09:30" }],
  },
  {
    sat: [{ from: "09:30", to: "09:30" }],
  },
  {
    sun: [{ from: "09:30", to: "09:00" }],
  },
];

// console.log(schedules[0]["fri"]);

export default function Schedules() {
  return (
    <Container>
      <Heading>Weekly hours</Heading>
      <GridCol>
        {schedules.map((schedule, index) => {
          const [day] = Object.keys(schedule);

          return (
            <FlexRol key={index}>
              <CheckBox type="checkbox" />
              <Span>{day}</Span>
              <InputFlex>
                {schedule[day].map((day) => {
                  console.log(day);
                  return (
                    <div>
                      <Select>
                        <option>{day.from}</option>
                      </Select>
                      <Span>-</Span>
                      <Select>
                        <option>{day.to}</option>
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
  padding: 2.4rem;
  width: 60rem;
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
