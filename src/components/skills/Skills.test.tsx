import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["Driving", "Singing", "Racing"];

  it("should render correctly", () => {
    render(<Skills skills={skills} />);
    const skillList = screen.getByRole("list");
    expect(skillList).toBeInTheDocument();
  });

  it("should have expected number of skills", () => {
    render(<Skills skills={skills} />);
    const skillListItems = screen.getAllByRole("listitem");
    const drivingSkill = skillListItems.at(0);
    expect(drivingSkill).toHaveTextContent(/driving/i);
    expect(skillListItems).toHaveLength(skills.length);
  });

  it('Start learning button should not render', () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole('button', {name: /start learning/i})
    expect(startLearningButton).not.toBeInTheDocument()
  })

  it('start learning button is later displayed', async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    screen.debug()
    const startLearningButton = await screen.findByRole('button', {name: "Start learning"});
    screen.debug()
    expect(startLearningButton).toBeInTheDocument();
  })
});


