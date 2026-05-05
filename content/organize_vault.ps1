# organize_vault.ps1
# Run this script from your quartz/content folder
# It creates one subfolder per cluster and moves the atomic notes into them

# --- Create cluster subfolders ---
New-Item -ItemType Directory -Force -Path "Thinks in Systems"
New-Item -ItemType Directory -Force -Path "Builds and Organizes"
New-Item -ItemType Directory -Force -Path "Leads Through Logic"
New-Item -ItemType Directory -Force -Path "Develops People and Teams"
New-Item -ItemType Directory -Force -Path "Enters New Domains Fast"
New-Item -ItemType Directory -Force -Path "Builds Go-To-Market Motions"
New-Item -ItemType Directory -Force -Path "Revenue Engine Builder"

# --- Move hub notes into their folders ---
Move-Item -Force "Thinks in Systems.md"            "Thinks in Systems\Thinks in Systems.md"
Move-Item -Force "Builds and Organizes.md"         "Builds and Organizes\Builds and Organizes.md"
Move-Item -Force "Leads Through Logic.md"          "Leads Through Logic\Leads Through Logic.md"
Move-Item -Force "Develops People and Teams.md"    "Develops People and Teams\Develops People and Teams.md"
Move-Item -Force "Enters New Domains Fast.md"      "Enters New Domains Fast\Enters New Domains Fast.md"
Move-Item -Force "Builds Go-To-Market Motions.md"  "Builds Go-To-Market Motions\Builds Go-To-Market Motions.md"
Move-Item -Force "Revenue Engine Builder.md"       "Revenue Engine Builder\Revenue Engine Builder.md"

# --- Thinks in Systems atomic notes ---
Move-Item -Force "Data to Narrative.md"                  "Thinks in Systems\Data to Narrative.md"
Move-Item -Force "Pattern Recognition.md"                "Thinks in Systems\Pattern Recognition.md"
Move-Item -Force "Shared Reality Framework.md"           "Thinks in Systems\Shared Reality Framework.md"
Move-Item -Force "Trend Surfacing.md"                    "Thinks in Systems\Trend Surfacing.md"
Move-Item -Force "Model from Scratch.md"                 "Thinks in Systems\Model from Scratch.md"
Move-Item -Force "Highest Leverage Segment.md"           "Thinks in Systems\Highest Leverage Segment.md"
Move-Item -Force "Discovery to Diagnosis.md"             "Thinks in Systems\Discovery to Diagnosis.md"
Move-Item -Force "Capacity Modeling.md"                  "Thinks in Systems\Capacity Modeling.md"
Move-Item -Force "Scenario Analysis.md"                  "Thinks in Systems\Scenario Analysis.md"
Move-Item -Force "Board-Level Financial Modeling.md"     "Thinks in Systems\Board-Level Financial Modeling.md"
Move-Item -Force "Acquisition Screening.md"              "Thinks in Systems\Acquisition Screening.md"

# --- Builds and Organizes atomic notes ---
Move-Item -Force "Process Design.md"               "Builds and Organizes\Process Design.md"
Move-Item -Force "Program Visibility.md"           "Builds and Organizes\Program Visibility.md"
Move-Item -Force "Strategy to Execution.md"        "Builds and Organizes\Strategy to Execution.md"
Move-Item -Force "Decision-Ready Reporting.md"     "Builds and Organizes\Decision-Ready Reporting.md"
Move-Item -Force "Planning Infrastructure.md"      "Builds and Organizes\Planning Infrastructure.md"
Move-Item -Force "Tool Consolidation.md"           "Builds and Organizes\Tool Consolidation.md"
Move-Item -Force "Territory Design.md"             "Builds and Organizes\Territory Design.md"
Move-Item -Force "Shared KPIs.md"                  "Builds and Organizes\Shared KPIs.md"
Move-Item -Force "Revenue Gap Program.md"          "Builds and Organizes\Revenue Gap Program.md"

# --- Leads Through Logic atomic notes ---
Move-Item -Force "Assumption Dismantling.md"           "Leads Through Logic\Assumption Dismantling.md"
Move-Item -Force "Making the Invisible Visible.md"     "Leads Through Logic\Making the Invisible Visible.md"
Move-Item -Force "Coalition Building.md"               "Leads Through Logic\Coalition Building.md"
Move-Item -Force "Executive Communication.md"          "Leads Through Logic\Executive Communication.md"
Move-Item -Force "Business Case Writing.md"            "Leads Through Logic\Business Case Writing.md"
Move-Item -Force "Executive Sponsorship.md"            "Leads Through Logic\Executive Sponsorship.md"
Move-Item -Force "Show Don't Tell.md"                  "Leads Through Logic\Show Don't Tell.md"
Move-Item -Force "Financial Narrative.md"              "Leads Through Logic\Financial Narrative.md"
Move-Item -Force "External Advisor Coordination.md"    "Leads Through Logic\External Advisor Coordination.md"
Move-Item -Force "Strategic Risk Recognition.md"       "Leads Through Logic\Strategic Risk Recognition.md"

# --- Develops People and Teams atomic notes ---
Move-Item -Force "Capability-Gap Hiring.md"            "Develops People and Teams\Capability-Gap Hiring.md"
Move-Item -Force "Growing Early-Career Talent.md"      "Develops People and Teams\Growing Early-Career Talent.md"
Move-Item -Force "Talent Multiplication.md"            "Develops People and Teams\Talent Multiplication.md"
Move-Item -Force "Cross-Functional Team Building.md"   "Develops People and Teams\Cross-Functional Team Building.md"

# --- Enters New Domains Fast atomic notes ---
Move-Item -Force "Healthcare Domain Entry.md"                  "Enters New Domains Fast\Healthcare Domain Entry.md"
Move-Item -Force "PLG SaaS Domain Entry.md"                    "Enters New Domains Fast\PLG SaaS Domain Entry.md"
Move-Item -Force "Early-Stage Domain Entry.md"                 "Enters New Domains Fast\Early-Stage Domain Entry.md"
Move-Item -Force "Enterprise Automation Domain Entry.md"       "Enters New Domains Fast\Enterprise Automation Domain Entry.md"

# --- Builds Go-To-Market Motions atomic notes ---
Move-Item -Force "Outbound Engine.md"          "Builds Go-To-Market Motions\Outbound Engine.md"
Move-Item -Force "Rep Behavior Change.md"      "Builds Go-To-Market Motions\Rep Behavior Change.md"
Move-Item -Force "Proof of Value Model.md"     "Builds Go-To-Market Motions\Proof of Value Model.md"
Move-Item -Force "Customer Segmentation.md"    "Builds Go-To-Market Motions\Customer Segmentation.md"
Move-Item -Force "Comp Redesign.md"            "Builds Go-To-Market Motions\Comp Redesign.md"
Move-Item -Force "Role Clarity.md"             "Builds Go-To-Market Motions\Role Clarity.md"

# --- Revenue Engine Builder atomic notes ---
Move-Item -Force "Full-Stack Problem Solving.md"           "Revenue Engine Builder\Full-Stack Problem Solving.md"
Move-Item -Force "Tool to Narrative.md"                    "Revenue Engine Builder\Tool to Narrative.md"
Move-Item -Force "Discovery to Business Case.md"           "Revenue Engine Builder\Discovery to Business Case.md"
Move-Item -Force "Operating Model Redesign.md"             "Revenue Engine Builder\Operating Model Redesign.md"
Move-Item -Force "Cross-Functional Revenue Program.md"     "Revenue Engine Builder\Cross-Functional Revenue Program.md"

Write-Host "Done! Your content folder is now organized by cluster."
