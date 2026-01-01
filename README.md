HPC Cluster Web Interface (Open OnDemand + SLURM)

Overview:

This project implements a web-based interface for accessing and managing an HPC (High Performance Computing) cluster using Open OnDemand and the SLURM workload manager.
It was developed as part of an academic HPC project at IIT Hyderabad (IITH).

Objective:

HPC clusters are commonly accessed through SSH and manual job scripts, which can be challenging for new users.
This project aims to simplify cluster interaction by providing a browser-based interface for job submission and management.

Technologies Used:

Open OnDemand – Web portal framework for HPC access
SLURM – Job scheduler and resource manager
Ruby on Rails – Backend framework used by Open OnDemand applications
Linux (Command Line) – System-level interaction
Docker – Containerization support

System Workflow (High-Level):

Users access the application through a web browser.
Job requests are submitted via the interface.
Requests are passed to SLURM for scheduling.
SLURM allocates cluster resources and executes the jobs.
Job status and execution details are available through the portal.

Networking & Cluster Connectivity:

Application-to-cluster communication was managed using Linux command-line networking.
Routing and connectivity between the application layer and compute nodes were handled at the system level.
This ensured reliable interaction with SLURM-managed resources within the HPC environment.

Project Structure (Simplified):

app/ – Application logic
config/ – Configuration files
db/ – Database-related files
public/ – Static assets
Dockerfile – Container configuration
Gemfile – Ruby dependencies

Key Learnings:

HPC cluster architecture and workflows
Job scheduling and resource allocation using SLURM
Integration of web applications with system-level schedulers
Practical exposure to Linux-based cluster environments

Acknowledgements:

IIT Hyderabad (IITH),

Open OnDemand Community,

SLURM Workload Manager.
