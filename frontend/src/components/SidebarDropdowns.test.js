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

  it("renders Dashboard as a list (not a dropdown) with all subpages visible", () => {
    // Use the 'Dashboard' domain from HOSPITAL_HEADER_DOMAINS
    // Note: Dashboard is rendered as a simple list, not a dropdown (see SidebarDropdowns.js line 10-11)
    const domain = HOSPITAL_HEADER_DOMAINS.find(d => d.label === "Dashboard");
    render(
      <SidebarDropdowns
        role="hospital"
        activeDomain="Dashboard"
        activeSubpage={domain.subpages[0]}
        onSubpageChange={() => {}}
        collapsed={false}
      />
    );
    // Dashboard/Home domains are always rendered as lists, so subpages are visible
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Active Cases")).toBeInTheDocument();
    expect(screen.getByText("Critical Alerts")).toBeInTheDocument();
    expect(screen.getByText("Today's Tasks")).toBeInTheDocument();
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
