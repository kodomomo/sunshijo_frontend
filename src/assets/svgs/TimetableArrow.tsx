interface propsType {
  direction: string;
}

const TimetableArrow = ({ direction }: propsType) => {
  return direction == "left" ? (
    <svg
      cursor="pointer"
      width="12"
      height="18"
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.908L4.19802 9L12 16.092L9.90099 18L-4.76837e-07 9L9.90099 0L12 1.908Z"
        fill="#242424"
      />
    </svg>
  ) : (
    <svg
      cursor="pointer"
      width="12"
      height="18"
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1.908L7.80198 9L0 16.092L2.09901 18L12 9L2.09901 0L0 1.908Z"
        fill="#242424"
      />
    </svg>
  );
};

export default TimetableArrow;
