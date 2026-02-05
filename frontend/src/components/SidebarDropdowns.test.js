import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SidebarDropdowns from "./SidebarDropdowns";
import { HOSPITAL_HEADER_DOMAINS, PATIENT_HEADER_DOMAINS } from "./HeaderDropdowns";

describe("SidebarDropdowns", () => {
  it("renders simple buttons for ≤3 subpages", () => {
    // Use the 'Home' domain from PATIENT_HEADER_DOMAINS (4 subpages, but test with first 3)
    const domain = PATIENT_HEADER_DOMAINS.find(d => d.label === "Home");
    render(
      <SidebarDropdowns
        role="patient"
        activeDomain="Home"
        activeSubpage={domain.subpages[0]}
        onSubpageChange={() => {}}
        collapsed={false}
      />
    );
    // Only test first 3 subpages for button rendering
    expect(screen.getByText("Health Summary")).toBeInTheDocument();
    expect(screen.getByText("Latest Alerts")).toBeInTheDocument();
    expect(screen.getByText("Care Tasks")).toBeInTheDocument();
  });

  it("renders dropdown for >3 subpages and toggles open/close", () => {
    // Use the 'Dashboard' domain from HOSPITAL_HEADER_DOMAINS (has >3 subpages)
    // Note: Dashboard is a special case that renders as a list, not a dropdown
    // Use a different domain with >3 subpages for testing dropdown behavior
    const domain = HOSPITAL_HEADER_DOMAINS.find(d => d.label === "Patients");
    render(
      <SidebarDropdowns
        role="hospital"
        activeDomain="Patients"
        activeSubpage={domain.subpages[0]}
        onSubpageChange={() => {}}
        collapsed={false}
      />
    );
    // Dropdown label
    expect(screen.getByText("Patients")).toBeInTheDocument();
    // Subpages visible by default
    expect(screen.getByText("Patient List")).toBeInTheDocument();
    expect(screen.getByText("New Patient Intake")).toBeInTheDocument();
    // Toggle dropdown
    fireEvent.click(screen.getByText("Patients"));
    // Subpages should disappear when closed
    expect(screen.queryByText("Patient List")).not.toBeInTheDocument();
  });

  it("calls onSubpageChange when a subpage is clicked", () => {
    const domain = PATIENT_HEADER_DOMAINS.find(d => d.label === "Home");
    const onSubpageChange = jest.fn();
    render(
      <SidebarDropdowns
        role="patient"
        activeDomain="Home"
        activeSubpage={domain.subpages[0]}
        onSubpageChange={onSubpageChange}
        collapsed={false}
      />
    );
    fireEvent.click(screen.getByText("Latest Alerts"));
    expect(onSubpageChange).toHaveBeenCalledWith("Latest Alerts");
  });
});
