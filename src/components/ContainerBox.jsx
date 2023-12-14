function ContainerBox(prop) {
  return (
    <>
      <div className="my-4 py-4 rounded-lg border-black bg-blue-300">
        <h2 className="text-3xl font-bold py-5">Frequently Asked Questions</h2>
        {prop.children}
      </div>
    </>
  );
}

export default ContainerBox;
