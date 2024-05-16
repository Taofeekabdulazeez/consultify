import Modal from "../../../components/Modal";
import EditSchedules from "../components/EditSchedules";

export default function Schedules() {
  return (
    <Modal>
      <Modal.Open opens="schedules">
        <button>edit</button>
      </Modal.Open>
      <Modal.Window name="schedules">
        <EditSchedules />
      </Modal.Window>
    </Modal>
  );
}
