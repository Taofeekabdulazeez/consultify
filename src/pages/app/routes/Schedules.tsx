import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "../../../components/Modal";
import EditSchedules from "../components/EditSchedules";

export default function Schedules() {
  return (
    <>
      <Modal>
        <Modal.Open opens="schedules">
          <button>edit</button>
        </Modal.Open>
        <Modal.Window name="schedules">
          <EditSchedules />
        </Modal.Window>
      </Modal>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev, next today",
          center: "title",
          right: "resourceTimelineWook, dayGridMonth, timeGridWeek",
        }}
        events={{}}
        nowIndicator={true}
        editable={true}
        droppable={true}
        selectable={true}
        selectMirror={true}
        // dateClick={{}}
        // drop={ }
        // eventClick={}
      />
    </>
  );
}
