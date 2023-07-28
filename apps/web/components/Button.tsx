const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      type="submit"
      //   className="text-white bg-p-g-base p-4 rounded-full hover:bg-p-g-900"
    >
      {children}{" "}
    </button>
  );
};

export { Button };

{
  /* <template>
    <button
      type="submit"
      className="text-white bg-p-g-base p-4 rounded-full hover:bg-p-g-900"
    >
  {{ buttontext }}  </button>
  </template>;
  
  <script>
    export default {
      props: ['buttontext']
    }
  </script> */
}
