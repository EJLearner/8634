import {Dialog} from './Dialog';

export function ContactUsSection({
  ref: dialogRef,
}: {
  ref: React.RefObject<HTMLDialogElement | null>;
}) {
  return (
    <section>
      <h2>
        Want to Know More?
        <br />
        Reach out to us!
      </h2>
      <button onClick={() => dialogRef.current?.showModal()}>Contact Us</button>
      <p className="history">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Dialog onClose={() => dialogRef.current?.close()} ref={dialogRef} />
    </section>
  );
}
