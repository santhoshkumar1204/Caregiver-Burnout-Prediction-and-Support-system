const useCaregiver = () => {
  const role = localStorage.getItem("caregiverType") || "family";
  const isFamily = role === "family";
  const isProfessional = role === "professional";
  const professionalCategory = localStorage.getItem("professionalCategory") || "";
  return { role, isFamily, isProfessional, professionalCategory };
};

export default useCaregiver;
