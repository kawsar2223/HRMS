import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeaveSetupComponent } from './leave-setup/leave-setup.component';
import { LeaveEntryComponent } from './leave-entry/leave-entry.component';
import { ManualLeaveEntryComponent } from './manual-leave-entry/manual-leave-entry.component';
import { UpdateLeaveEntryComponent } from './update-leave-entry/update-leave-entry.component';
import { LeaveApprovalComponent } from './leave-approval/leave-approval.component';
import { LeaveApprovalByHrComponent } from './leave-approval-by-hr/leave-approval-by-hr.component';
import { EmpLeaveOpeningBalanceComponent } from './emp-leave-opening-balance/emp-leave-opening-balance.component';
import { LeaveCarryForwardComponent } from './leave-carry-forward/leave-carry-forward.component';
import { LeaveEncashmentComponent } from './leave-encashment/leave-encashment.component';
import { RecreationLeaveEncashmentComponent } from './recreation-leave-encashment/recreation-leave-encashment.component';
import { SubstituteLeaveComponent } from './substitute-leave/substitute-leave.component';
import { LeaveReportComponent } from './leave-report/leave-report.component';
import { LeaveInfoDetailsComponent } from './leave-info-details/leave-info-details.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'leave-setup', component: LeaveSetupComponent },
    { path: 'leave-entry', component: LeaveEntryComponent },
    { path: 'manual-leave-entry', component: ManualLeaveEntryComponent },
    { path: 'update-leave-entry', component: UpdateLeaveEntryComponent },
    { path: 'leave-approval', component: LeaveApprovalComponent },
    { path: 'leave-approval-by-hr', component: LeaveApprovalByHrComponent },
    { path: 'emp-leave-opening-balance', component: EmpLeaveOpeningBalanceComponent },
    { path: 'leave-carry-forward', component: LeaveCarryForwardComponent },
    { path: 'leave-encashment', component: LeaveEncashmentComponent },
    { path: 'recreation-leave-encashment', component: RecreationLeaveEncashmentComponent },
    { path: 'substitute-leave', component: SubstituteLeaveComponent },
    { path: 'leave-report', component: LeaveReportComponent },
    { path: 'leave-info-details', component: LeaveInfoDetailsComponent },

  ])],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
