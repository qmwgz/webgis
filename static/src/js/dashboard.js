/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";

class AwesomeDashboard extends Component {
    static template = "webgis.AwesomeDashboard";
}

registry.category("actions").add("webgis.dashboard", AwesomeDashboard);
