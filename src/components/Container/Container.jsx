// eslint-disable-next-line react/prop-types
export const Container = ({ children }) => {
  return (
    <section className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen flex justify-center items-center">
      {children}
    </section>
  );
};
