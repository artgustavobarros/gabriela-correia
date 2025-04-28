export function ShowDisplay() {
  return (
    <>
      <div className="block sm:hidden">XS</div>
      <div className="hidden sm:block md:hidden">SM</div>
      <div className="hidden md:block lg:hidden">MD</div>
      <div className="hidden lg:block">LG</div>
    </>
  );
}
