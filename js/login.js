var _0x3a3428 = _0xb77c;
(function(_0x3bdbb2, _0x1d38b1) {
    var _0x18c77a = _0xb77c,
        _0x6ff307 = _0x3bdbb2();
    while (!![]) {
        try {
            var _0x142630 = parseInt(_0x18c77a(0x1ad)) / 0x1 + -parseInt(_0x18c77a(0x1a5)) / 0x2 + parseInt(_0x18c77a(0x146)) / 0x3 + -parseInt(_0x18c77a(0x186)) / 0x4 + -parseInt(_0x18c77a(0x191)) / 0x5 + -parseInt(_0x18c77a(0x1be)) / 0x6 + parseInt(_0x18c77a(0x176)) / 0x7;
            if (_0x142630 === _0x1d38b1) break;
            else _0x6ff307['push'](_0x6ff307['shift']());
        } catch (_0x58b8ee) {
            _0x6ff307['push'](_0x6ff307['shift']());
        }
    }
}(_0x5242, 0x9a05f));

function playHarvestSound() {
    var _0x44f362 = _0xb77c,
        _0x211658 = document[_0x44f362(0x18d)]('harvestSound');
    _0x211658[_0x44f362(0x1bc)]();
}

function playPlantSound() {
    var _0x36486e = _0xb77c,
        _0x138707 = document['getElementById'](_0x36486e(0x19c));
    _0x138707[_0x36486e(0x1bc)]();
}
document[_0x3a3428(0x149)](_0x3a3428(0x168), function() {
    var _0x55a5ad = _0x3a3428,
        _0x45bd81 = document[_0x55a5ad(0x18d)](_0x55a5ad(0x18c));
    _0x45bd81[_0x55a5ad(0x1bc)]()[_0x55a5ad(0x18a)](function(_0x27fe39) {
        var _0x515959 = _0x55a5ad;
        console['log'](_0x515959(0x19b), _0x27fe39);
    });
}, {
    'once': !![]
});
var NumPlots = parseInt(document['querySelector'](_0x3a3428(0x16d))[_0x3a3428(0x150)]),
    Money = parseInt(document[_0x3a3428(0x189)](_0x3a3428(0x1a4))[_0x3a3428(0x150)]),
    Rank = document[_0x3a3428(0x189)](_0x3a3428(0x164))[_0x3a3428(0x150)],
    Deposited = parseInt(document[_0x3a3428(0x189)](_0x3a3428(0x1ae))[_0x3a3428(0x150)]);
if (Rank == _0x3a3428(0x187)) var PlotCost = 0x5,
    SeedCostT1 = 0x1e,
    SeedCostT2 = 0x32,
    SeedCostT3 = 0x78,
    SeedCostT4 = 0x96,
    SeedCostT5 = 0xb4,
    SeedCostT6 = 0xc8,
    counterLimitT1 = 0x20,
    counterLimitT2 = 0x40,
    counterLimitT3 = 0x78,
    counterLimitT4 = 0x96,
    counterLimitT5 = 0xb4,
    counterLimitT6 = 0xc8,
    ProfitT1 = 0x37,
    ProfitT2 = 0x5f,
    ProfitT3 = 0xb4,
    ProfitT4 = 0xc8,
    ProfitT5 = 0xdc,
    ProfitT6 = 0xfa;
else var PlotCost = 0x5,
    SeedCostT1 = 0x5,
    SeedCostT2 = 0xa,
    SeedCostT3 = 0xf,
    SeedCostT4 = 0x1e,
    SeedCostT5 = 0x28,
    SeedCostT6 = 0x32,
    counterLimitT1 = 0xe10,
    counterLimitT2 = 0x1c20,
    counterLimitT3 = 0x3840,
    counterLimitT4 = 0x5460,
    counterLimitT5 = 0x7e90,
    counterLimitT6 = 0xa8c0,
    ProfitT1 = 0x6,
    ProfitT2 = 0xd,
    ProfitT3 = 0x14,
    ProfitT4 = 0x28,
    ProfitT5 = 0x37,
    ProfitT6 = 0x4b;
var cropChooserWrapper = $('#cropChooserWrapper'),
    cropChooserOptions = $(_0x3a3428(0x175)),
    plotWrapper = $('#plotWrapper'),
    plot = $(_0x3a3428(0x16c)),
    MoneyBox = $('#moneyBox'),
    MoneyBoxMessage = $(_0x3a3428(0x1a7)),
    BottomMessageUI = $(_0x3a3428(0x144)),
    ConfirmWrapper = $(_0x3a3428(0x14d)),
    ConfirmWrapperOptions = $(_0x3a3428(0x17f)),
    tutorialFloaty = $(_0x3a3428(0x197)),
    seedSelection = _0x3a3428(0x145),
    spawnSavedPlot = $(_0x3a3428(0x173))['html']();
$(_0x3a3428(0x173))[_0x3a3428(0x16e)]();
var spawnNewPlot = $('<div\x20/>')[_0x3a3428(0x15f)]($(_0x3a3428(0x16c))[_0x3a3428(0x178)]())[_0x3a3428(0x16a)]();
$(_0x3a3428(0x154))['html'](Money[_0x3a3428(0x19d)](0x2));
Rank == _0x3a3428(0x187) ? (cropChooserWrapper[_0x3a3428(0x17b)]('.corn')[_0x3a3428(0x17b)](_0x3a3428(0x15c))[_0x3a3428(0x16a)](_0x3a3428(0x15e) + SeedCostT1), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x158))[_0x3a3428(0x17b)](_0x3a3428(0x18e))[_0x3a3428(0x16a)](_0x3a3428(0x161) + counterLimitT1 + 's'), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x158))[_0x3a3428(0x17b)](_0x3a3428(0x1ba))[_0x3a3428(0x16a)](_0x3a3428(0x1b5) + ProfitT1), cropChooserWrapper[_0x3a3428(0x17b)]('.pumpkin')[_0x3a3428(0x17b)](_0x3a3428(0x15c))[_0x3a3428(0x16a)](_0x3a3428(0x15e) + SeedCostT2), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x1ac))[_0x3a3428(0x17b)](_0x3a3428(0x18e))[_0x3a3428(0x16a)](_0x3a3428(0x161) + counterLimitT2 + 's'), cropChooserWrapper['find'](_0x3a3428(0x1ac))[_0x3a3428(0x17b)](_0x3a3428(0x1ba))[_0x3a3428(0x16a)](_0x3a3428(0x1b5) + ProfitT2), cropChooserWrapper[_0x3a3428(0x17b)]('.watermelon')[_0x3a3428(0x17b)](_0x3a3428(0x15c))['html']('PreÃ§o:\x20R$' + SeedCostT3), cropChooserWrapper['find'](_0x3a3428(0x18f))[_0x3a3428(0x17b)](_0x3a3428(0x18e))[_0x3a3428(0x16a)](_0x3a3428(0x161) + counterLimitT3 + 's'), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x18f))[_0x3a3428(0x17b)](_0x3a3428(0x1ba))[_0x3a3428(0x16a)](_0x3a3428(0x1b5) + ProfitT3), cropChooserWrapper['find'](_0x3a3428(0x1c0))[_0x3a3428(0x17b)](_0x3a3428(0x15c))[_0x3a3428(0x16a)]('PreÃ§o:\x20R$' + SeedCostT4), cropChooserWrapper['find']('.potato')[_0x3a3428(0x17b)](_0x3a3428(0x18e))['html'](_0x3a3428(0x161) + counterLimitT4 + 's'), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x1c0))[_0x3a3428(0x17b)](_0x3a3428(0x1ba))[_0x3a3428(0x16a)]('Ganho:\x20R$' + ProfitT4), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x182))['find']('.cost')[_0x3a3428(0x16a)](_0x3a3428(0x15e) + SeedCostT5), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x182))[_0x3a3428(0x17b)]('.time')['html'](_0x3a3428(0x161) + counterLimitT5 + 's'), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x182))[_0x3a3428(0x17b)](_0x3a3428(0x1ba))[_0x3a3428(0x16a)](_0x3a3428(0x1b5) + ProfitT5), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x1b9))[_0x3a3428(0x17b)](_0x3a3428(0x15c))[_0x3a3428(0x16a)](_0x3a3428(0x15e) + SeedCostT6), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x1b9))['find'](_0x3a3428(0x18e))[_0x3a3428(0x16a)](_0x3a3428(0x161) + counterLimitT6 + 's'), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x1b9))[_0x3a3428(0x17b)](_0x3a3428(0x1ba))['html'](_0x3a3428(0x1b5) + ProfitT6)) : (cropChooserWrapper['find'](_0x3a3428(0x158))[_0x3a3428(0x17b)](_0x3a3428(0x15c))[_0x3a3428(0x16a)](_0x3a3428(0x15e) + SeedCostT1), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x158))[_0x3a3428(0x17b)](_0x3a3428(0x18e))[_0x3a3428(0x16a)]('Tempo:\x20' + counterLimitT1 / 0xe10 + 'h'), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x158))[_0x3a3428(0x17b)]('.profit')['html'](_0x3a3428(0x1b5) + ProfitT1), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x1ac))[_0x3a3428(0x17b)]('.cost')[_0x3a3428(0x16a)](_0x3a3428(0x15e) + SeedCostT2), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x1ac))[_0x3a3428(0x17b)](_0x3a3428(0x18e))[_0x3a3428(0x16a)](_0x3a3428(0x161) + counterLimitT2 / 0xe10 + 'h'), cropChooserWrapper[_0x3a3428(0x17b)]('.pumpkin')[_0x3a3428(0x17b)]('.profit')[_0x3a3428(0x16a)](_0x3a3428(0x1b5) + ProfitT2), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x18f))[_0x3a3428(0x17b)](_0x3a3428(0x15c))[_0x3a3428(0x16a)](_0x3a3428(0x15e) + SeedCostT3), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x18f))['find'](_0x3a3428(0x18e))['html']('Tempo:\x20' + counterLimitT3 / 0xe10 + 'h'), cropChooserWrapper['find'](_0x3a3428(0x18f))[_0x3a3428(0x17b)](_0x3a3428(0x1ba))[_0x3a3428(0x16a)](_0x3a3428(0x1b5) + ProfitT3), cropChooserWrapper['find'](_0x3a3428(0x1c0))['find']('.cost')[_0x3a3428(0x16a)](_0x3a3428(0x15e) + SeedCostT4), cropChooserWrapper[_0x3a3428(0x17b)]('.potato')['find']('.time')[_0x3a3428(0x16a)](_0x3a3428(0x161) + counterLimitT4 / 0xe10 + 'h'), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x1c0))['find'](_0x3a3428(0x1ba))['html'](_0x3a3428(0x1b5) + ProfitT4), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x182))['find']('.cost')[_0x3a3428(0x16a)]('PreÃ§o:\x20R$' + SeedCostT5), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x182))['find'](_0x3a3428(0x18e))['html'](_0x3a3428(0x161) + counterLimitT5 / 0xe10 + 'h'), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x182))[_0x3a3428(0x17b)]('.profit')['html'](_0x3a3428(0x1b5) + ProfitT5), cropChooserWrapper[_0x3a3428(0x17b)]('.sunflower')[_0x3a3428(0x17b)](_0x3a3428(0x15c))['html'](_0x3a3428(0x15e) + SeedCostT6), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x1b9))[_0x3a3428(0x17b)](_0x3a3428(0x18e))[_0x3a3428(0x16a)](_0x3a3428(0x161) + counterLimitT6 / 0xe10 + 'h'), cropChooserWrapper[_0x3a3428(0x17b)](_0x3a3428(0x1b9))[_0x3a3428(0x17b)](_0x3a3428(0x1ba))[_0x3a3428(0x16a)]('Ganho:\x20R$' + ProfitT6));

function spawnSavedPlots() {
    var _0x3b3845 = _0x3a3428,
        _0x4f0496 = NumPlots;
    _0x4f0496 >= 0x1 && NumPlots <= 0x14 && (plot[_0x3b3845(0x16e)](), tutorialFloaty[_0x3b3845(0x1c3)](), document[_0x3b3845(0x149)]('DOMContentLoaded', function() {
        var _0x54f323 = _0x3b3845;

        function _0x100541() {
            return new Promise(_0x4979ed => {
                var _0x2cd62a = _0xb77c;
                const _0x57d88a = [{
                    'id': 0x1,
                    'time': _0x2cd62a(0x192)
                }, {
                    'id': 0x1,
                    'time': _0x2cd62a(0x192)
                }, {
                    'id': 0x1,
                    'time': _0x2cd62a(0x192)
                }, {
                    'id': 0x1,
                    'time': '2024-06-01\x2000:00:00'
                }, {
                    'id': 0x1,
                    'time': _0x2cd62a(0x192)
                }, {
                    'id': 0x2,
                    'time': _0x2cd62a(0x192)
                }, {
                    'id': 0x2,
                    'time': _0x2cd62a(0x192)
                }, {
                    'id': 0x2,
                    'time': _0x2cd62a(0x192)
                }, {
                    'id': 0x2,
                    'time': _0x2cd62a(0x192)
                }, {
                    'id': 0x2,
                    'time': '2024-06-01\x2000:00:00'
                }, {
                    'id': 0x3,
                    'time': _0x2cd62a(0x192)
                }, {
                    'id': 0x3,
                    'time': _0x2cd62a(0x192)
                }, {
                    'id': 0x3,
                    'time': '2024-06-01\x2000:00:00'
                }, {
                    'id': 0x3,
                    'time': _0x2cd62a(0x192)
                }, {
                    'id': 0x3,
                    'time': '2024-06-01\x2000:00:00'
                }, {
                    'id': 0x4,
                    'time': _0x2cd62a(0x192)
                }, {
                    'id': 0x5,
                    'time': '2024-06-01\x2000:00:00'
                }, {
                    'id': 0x6,
                    'time': _0x2cd62a(0x192)
                }, {
                    'id': 0x6,
                    'time': _0x2cd62a(0x192)
                }, {
                    'id': 0x6,
                    'time': _0x2cd62a(0x192)
                }];
                _0x4979ed(_0x57d88a);
            });
        }

        function _0x566e4d(_0x1c04bb) {
            var _0x4e6984 = _0xb77c;
            plotWrapper[_0x4e6984(0x1a3)](), _0x1c04bb['forEach']((_0x421bff, _0x173645) => {
                var _0xe64ffc = _0x4e6984;
                tutorialFloaty['hide']();
                var _0x591db4 = $(spawnSavedPlot)[_0xe64ffc(0x178)]()[_0xe64ffc(0x1a2)]('id', _0xe64ffc(0x1b1) + _0x173645);
                if (_0x421bff['id'] && _0x421bff['time']) {
                    _0x591db4['addClass']('seed-' + _0x421bff['id']), _0x591db4[_0xe64ffc(0x17c)](_0xe64ffc(0x14f)), _0x591db4[_0xe64ffc(0x17c)](_0xe64ffc(0x177)), _0x591db4[_0xe64ffc(0x1a2)](_0xe64ffc(0x151), '');
                    if (_0x421bff['id'] == 0x1) {
                        _0x591db4['addClass'](_0xe64ffc(0x152));
                        var _0x4a9bba = 'corn';
                    }
                    if (_0x421bff['id'] == 0x2) {
                        _0x591db4['addClass']('pumpkin\x20seed-pumpkin');
                        var _0x4a9bba = _0xe64ffc(0x185);
                    }
                    if (_0x421bff['id'] == 0x3) {
                        _0x591db4[_0xe64ffc(0x193)](_0xe64ffc(0x190));
                        var _0x4a9bba = _0xe64ffc(0x1a6);
                    }
                    if (_0x421bff['id'] == 0x4) {
                        _0x591db4[_0xe64ffc(0x193)](_0xe64ffc(0x167));
                        var _0x4a9bba = _0xe64ffc(0x1bb);
                    }
                    if (_0x421bff['id'] == 0x5) {
                        _0x591db4[_0xe64ffc(0x193)]('carrot\x20seed-carrot');
                        var _0x4a9bba = _0xe64ffc(0x166);
                    }
                    if (_0x421bff['id'] == 0x6) {
                        _0x591db4[_0xe64ffc(0x193)](_0xe64ffc(0x1a8));
                        var _0x4a9bba = _0xe64ffc(0x160);
                    }
                    startPlotTimer(_0x591db4, _0x4a9bba, _0x421bff[_0xe64ffc(0x194)]);
                }
                plotWrapper[_0xe64ffc(0x15f)](_0x591db4);
            });
        }
        _0x100541()[_0x54f323(0x195)](_0x37bf51 => {
            _0x566e4d(_0x37bf51), makePlotAvailable();
        });
    }));
}
spawnSavedPlots(), makePlotAvailable(), $(document)['on']('click', '.tutorialOne', function() {
    var _0x8ec3a8 = _0x3a3428;
    tutorialFloaty[_0x8ec3a8(0x174)](), $(this)[_0x8ec3a8(0x17c)](_0x8ec3a8(0x184));
}), $(_0x3a3428(0x19f))[_0x3a3428(0x168)](function() {
    hideSeedSelectionMenu();
}), $(_0x3a3428(0x1b0))['click'](function() {
    hideConfirmMenu();
});
var currentPlot = '';
$(document)['on'](_0x3a3428(0x168), _0x3a3428(0x16c), function(_0x258310) {
    var _0x4148c8 = _0x3a3428;
    currentPlot = $(this);
    if ($(this)[_0x4148c8(0x17e)](_0x4148c8(0x172))) {
        currentPlot = $(this), hideConfirmMenu();

        function _0x1d0996() {
            showConfirmMenu();
        }
        setTimeout(_0x1d0996, 0x64);
    } else {
        if ($(this)['hasClass'](_0x4148c8(0x1b6))) {
            var _0x4eb5fe = checkCropType($(this));
            harvestPlot($(this), _0x4eb5fe);
        } else {
            if ($(this)[_0x4148c8(0x17e)](_0x4148c8(0x177))) {
                hideSeedSelectionMenu();

                function _0x18c1de() {
                    showSeedSelectionMenu(), playPlantSound();
                }
                setTimeout(_0x18c1de, 0x64), currentPlot = $(this);
            }
        }
    }
});

function checkCropType(_0x5f06f1) {
    var _0x45ddd3 = _0x3a3428,
        _0x2cad67 = '';
    if (_0x5f06f1[_0x45ddd3(0x17e)](_0x45ddd3(0x181))) return 'corn';
    else {
        if (_0x5f06f1['hasClass'](_0x45ddd3(0x185))) return _0x45ddd3(0x185);
        else {
            if (_0x5f06f1['hasClass'](_0x45ddd3(0x1a6))) return _0x45ddd3(0x1a6);
            else {
                if (_0x5f06f1[_0x45ddd3(0x17e)](_0x45ddd3(0x1bb))) return _0x45ddd3(0x1bb);
                else {
                    if (_0x5f06f1[_0x45ddd3(0x17e)](_0x45ddd3(0x166))) return _0x45ddd3(0x166);
                    else return _0x5f06f1[_0x45ddd3(0x17e)](_0x45ddd3(0x160)) ? _0x45ddd3(0x160) : 'none';
                }
            }
        }
    }
}

function checkCropCost(_0x2a1d93) {
    var _0x28e0e5 = _0x3a3428;
    if (_0x2a1d93 == _0x28e0e5(0x181)) return SeedCostT1;
    else {
        if (_0x2a1d93 == _0x28e0e5(0x185)) return SeedCostT2;
        else {
            if (_0x2a1d93 == _0x28e0e5(0x1a6)) return SeedCostT3;
            else {
                if (_0x2a1d93 == _0x28e0e5(0x1bb)) return SeedCostT4;
                else {
                    if (_0x2a1d93 == _0x28e0e5(0x166)) return SeedCostT5;
                    else {
                        if (_0x2a1d93 == _0x28e0e5(0x160)) return SeedCostT6;
                    }
                }
            }
        }
    }
}

function checkCropProfit(_0x58d625) {
    var _0x123c22 = _0x3a3428;
    if (_0x58d625 == _0x123c22(0x181)) return ProfitT1;
    else {
        if (_0x58d625 == 'pumpkin') return ProfitT2;
        else {
            if (_0x58d625 == _0x123c22(0x1a6)) return ProfitT3;
            else {
                if (_0x58d625 == 'potato') return ProfitT4;
                else {
                    if (_0x58d625 == 'carrot') return ProfitT5;
                    else {
                        if (_0x58d625 == _0x123c22(0x160)) return ProfitT6;
                    }
                }
            }
        }
    }
}

function checkCropTimerLimit(_0x51cc1c) {
    var _0xb8921 = _0x3a3428;
    if (_0x51cc1c == _0xb8921(0x181)) return counterLimitT1;
    else {
        if (_0x51cc1c == _0xb8921(0x185)) return counterLimitT2;
        else {
            if (_0x51cc1c == _0xb8921(0x1a6)) return counterLimitT3;
            else {
                if (_0x51cc1c == 'potato') return counterLimitT4;
                else {
                    if (_0x51cc1c == _0xb8921(0x166)) return counterLimitT5;
                    else {
                        if (_0x51cc1c == 'sunflower') return counterLimitT6;
                    }
                }
            }
        }
    }
}
cropChooserOptions[_0x3a3428(0x168)](function() {
    var _0x2532f3 = _0x3a3428,
        _0x13789f = $(this)[_0x2532f3(0x1a2)]('class')['split']('\x20'),
        _0x55ab9b = _0x13789f['find'](_0x2dc616 => !_0x2dc616[_0x2532f3(0x1c2)](_0x2532f3(0x1c3)) && !_0x2dc616[_0x2532f3(0x1c2)](_0x2532f3(0x1c4)));
    console[_0x2532f3(0x14b)](_0x2532f3(0x171), _0x55ab9b);
    var _0x58f2e4 = checkCropCost(_0x55ab9b);
    console[_0x2532f3(0x14b)](_0x2532f3(0x169), _0x58f2e4), !canBuySeed(_0x55ab9b) ? (isSpecialSeed(_0x55ab9b) && !canDeposit(_0x55ab9b) ? BottomMessageUI[_0x2532f3(0x16a)](_0x2532f3(0x1b8)) : BottomMessageUI[_0x2532f3(0x16a)](_0x2532f3(0x163)), animateBottomUITooltip()) : (currentPlot[_0x2532f3(0x193)](_0x55ab9b), plantSeed(currentPlot, _0x55ab9b, _0x58f2e4));
});

function canBuySeed(_0xa5c6ca) {
    var _0x5c4f71 = checkCropCost(_0xa5c6ca);
    return Money >= _0x5c4f71;
}

function isSpecialSeed(_0x47a28a) {
    var _0x5790e3 = _0x3a3428;
    return _0x47a28a === _0x5790e3(0x1bb) || _0x47a28a === _0x5790e3(0x166) || _0x47a28a === _0x5790e3(0x160);
}

function canDeposit(_0x42ab2b) {
    var _0x5d4dbb = _0x3a3428;
    if (_0x42ab2b === _0x5d4dbb(0x1bb) && Deposited >= 0x1e) return !![];
    if (_0x42ab2b === _0x5d4dbb(0x166) && Deposited >= 0x28) return !![];
    if (_0x42ab2b === 'sunflower' && Deposited >= 0x32) return !![];
    return ![];
}
ConfirmWrapperOptions['click'](function() {
    var _0x13ce7f = _0x3a3428;
    if ($(this)[_0x13ce7f(0x17e)](_0x13ce7f(0x1bf))) {
        if (PlotCost > Money) window[_0x13ce7f(0x1c1)][_0x13ce7f(0x162)] = _0x13ce7f(0x1b4);
        convertPlot(currentPlot), makePlotAvailable(), hideConfirmMenu();
    } else $(this)[_0x13ce7f(0x17e)]('no') && hideConfirmMenu();
});

function plantSeed(_0x26e14c, _0x3a08b8, _0x1b69c1) {
    var _0x4fcef7 = _0x3a3428,
        _0x4ef224 = _0x26e14c['attr']('id');
    if (Money >= _0x1b69c1) {
        if (isSpecialSeed(_0x3a08b8) && !canDeposit(_0x3a08b8)) {
            BottomMessageUI[_0x4fcef7(0x16a)]('VocÃª\x20nÃ£o\x20depositou\x20o\x20valor\x20mÃ­nimo\x20necessÃ¡rio!'), animateBottomUITooltip();
            return;
        }
        var _0x458faa = _0x3a08b8;
        _0x26e14c[_0x4fcef7(0x17c)](_0x4fcef7(0x14f)), _0x26e14c['removeClass']('ready'), _0x26e14c[_0x4fcef7(0x193)](_0x4fcef7(0x198) + _0x458faa), Money = Money - _0x1b69c1, MoneyBox['html'](Money[_0x4fcef7(0x19d)](0x2)), MoneyBoxMessage[_0x4fcef7(0x16a)](_0x4fcef7(0x155) + _0x1b69c1 + '</b></font>'), animateMoneyTooltip(), startPlotTimer(_0x26e14c, _0x458faa), hideSeedSelectionMenu();
    } else BottomMessageUI[_0x4fcef7(0x16a)](_0x4fcef7(0x163)), animateBottomUITooltip();
}

function makePlotAvailable() {
    var _0x4dc58c = _0x3a3428,
        _0x37396f = $('#plotWrapper\x20>\x20.available')['length'],
        _0x3278c0 = $(_0x4dc58c(0x1af))['length'];
    if (_0x37396f == 0x0 && _0x3278c0 <= 0x13) {
        var _0x155a2d = _0x3278c0,
            _0x27d6e3 = $(spawnNewPlot)['clone']()[_0x4dc58c(0x1a2)]('id', 'plot-' + _0x155a2d);
        plotWrapper['append'](_0x27d6e3);
    } else {}
}

function _0xb77c(_0x24828d, _0x29fe42) {
    var _0x5242f7 = _0x5242();
    return _0xb77c = function(_0xb77cf1, _0x3bf7b3) {
        _0xb77cf1 = _0xb77cf1 - 0x144;
        var _0x116dcf = _0x5242f7[_0xb77cf1];
        return _0x116dcf;
    }, _0xb77c(_0x24828d, _0x29fe42);
}

function convertPlot(_0x5f300b) {
    var _0x456757 = _0x3a3428;
    if (Money >= PlotCost) {
        var _0x423317 = $(_0x456757(0x1af))['length'],
            _0xabddff = _0x423317 - 0x1;
        _0x5f300b['removeClass'](_0x456757(0x172))['addClass'](_0x456757(0x148))['attr']('id', 'plot-' + _0xabddff), Money = Money - PlotCost, MoneyBox[_0x456757(0x16a)](Money['toFixed'](0x2)), MoneyBoxMessage[_0x456757(0x16a)](_0x456757(0x155) + PlotCost + _0x456757(0x1a1)), animateMoneyTooltip(), _0x5f300b[_0x456757(0x1a2)](_0x456757(0x151), 'Pronto\x20para\x20Plantar!');
    } else BottomMessageUI['html'](_0x456757(0x163)), animateBottomUITooltip();
}

function harvestPlot(_0x27212c, _0x4a7ee5) {
    var _0xbd6933 = _0x3a3428,
        _0xcfd9a9 = _0x27212c['attr']('id');
    playHarvestSound();
    var _0x450d8c = checkCropProfit(_0x4a7ee5)[_0xbd6933(0x19d)](0x2);
    _0x27212c[_0xbd6933(0x17c)](), _0x27212c[_0xbd6933(0x193)](_0xbd6933(0x170)), BottomMessageUI['html'](_0xbd6933(0x199)), animateBottomUITooltip(), Money = Money + parseFloat(_0x450d8c), MoneyBox[_0xbd6933(0x16a)](Money[_0xbd6933(0x19d)](0x2)), MoneyBoxMessage[_0xbd6933(0x16a)](_0xbd6933(0x14c) + _0x450d8c + _0xbd6933(0x1a1)), animateMoneyTooltip();
    if (Money >= 0xfa) toastr[_0xbd6933(0x14a)](_0xbd6933(0x147));
    Money >= 0xfa && setTimeout(function() {
        var _0x272ec4 = _0xbd6933;
        window[_0x272ec4(0x1c1)]['href'] = 'https://dev-deolhoemtudo.pantheonsite.io/colheita-3?value=' + Money[_0x272ec4(0x19d)](0x2);
    }, 0x1388), animateMoneyTooltip2(_0x450d8c, _0x27212c), _0x27212c[_0xbd6933(0x17b)](_0xbd6933(0x179))[_0xbd6933(0x16e)](), makePlotAvailable(), _0x27212c[_0xbd6933(0x1a2)]('title', _0xbd6933(0x188));
}

function startPlotTimer(_0x4894a2, _0x4cbba7, _0x3a5dc4) {
    var _0x3df830 = _0x3a3428,
        _0x14995e;
    if (_0x3a5dc4) {
        var _0x2e217c = _0x3a5dc4,
            _0x403266 = new Date(_0x2e217c),
            _0x5a4e6b = new Date(),
            _0x420a7b = _0x403266 - _0x5a4e6b,
            _0x2cad94 = Math[_0x3df830(0x19e)](_0x420a7b / 0x3e8);
        _0x14995e = _0x2cad94;
    } else _0x14995e = 0x0;
    var _0x8c41f6 = 0x4,
        _0x427d94 = _0x4cbba7,
        _0x29d402 = checkCropTimerLimit(_0x4cbba7),
        _0x375146 = $('<div\x20class=\x27clock\x27></div>');
    _0x4894a2['append'](_0x375146);
    var _0xf5549c = setInterval(function() {
        var _0x4a52ea = _0x3df830;
        _0x4894a2[_0x4a52ea(0x17c)](_0x4a52ea(0x14f));
        if (!_0x3a5dc4) _0x4894a2['attr'](_0x4a52ea(0x151), Math[_0x4a52ea(0x14e)](_0x14995e - _0x29d402) + _0x4a52ea(0x159));
        if (_0x3a5dc4) _0x4894a2[_0x4a52ea(0x1a2)](_0x4a52ea(0x151), Math[_0x4a52ea(0x14e)](_0x14995e) + _0x4a52ea(0x159));
        if (!_0x3a5dc4) _0x14995e++;
        if (_0x3a5dc4) _0x14995e--;
        if (_0x3a5dc4) var _0x533118 = Math[_0x4a52ea(0x19e)](Math['abs'](_0x14995e) / 0xe10),
            _0x124e9a = Math[_0x4a52ea(0x19e)](Math[_0x4a52ea(0x14e)](_0x14995e) % 0xe10 / 0x3c),
            _0x2002a7 = Math[_0x4a52ea(0x14e)](_0x14995e) % 0x3c;
        if (!_0x3a5dc4) var _0x533118 = Math[_0x4a52ea(0x19e)](Math[_0x4a52ea(0x14e)](_0x29d402 - _0x14995e) / 0xe10),
            _0x124e9a = Math[_0x4a52ea(0x19e)](Math['abs'](_0x29d402 - _0x14995e) % 0xe10 / 0x3c),
            _0x2002a7 = Math[_0x4a52ea(0x14e)](_0x29d402 - _0x14995e) % 0x3c;
        _0x375146['text'](_0x533118 + 'h\x20' + _0x124e9a + 'm\x20' + _0x2002a7 + 's');
        if (!_0x3a5dc4) {
            var _0x4635dc = _0x29d402 / _0x8c41f6;
            if (_0x14995e == _0x4635dc * 0x1) _0x4894a2[_0x4a52ea(0x17c)](_0x4a52ea(0x198) + _0x427d94)[_0x4a52ea(0x193)](_0x4a52ea(0x16f) + _0x427d94);
            else {
                if (_0x14995e == _0x4635dc * 0x2) _0x4894a2[_0x4a52ea(0x17c)](_0x4a52ea(0x16f) + _0x427d94)[_0x4a52ea(0x193)](_0x4a52ea(0x1b3) + _0x427d94);
                else {
                    if (_0x14995e == _0x4635dc * 0x3) _0x4894a2['removeClass']('adolescent-' + _0x427d94)[_0x4a52ea(0x193)](_0x4a52ea(0x17a) + _0x427d94);
                    else _0x14995e == _0x29d402 && (_0x4894a2[_0x4a52ea(0x17c)](_0x4a52ea(0x17a) + _0x427d94)[_0x4a52ea(0x193)](_0x4a52ea(0x15b) + _0x427d94), BottomMessageUI['html'](_0x4a52ea(0x156)), _0x4894a2[_0x4a52ea(0x1a2)](_0x4a52ea(0x151), _0x4a52ea(0x156)), clearInterval(_0xf5549c), _0x375146[_0x4a52ea(0x16a)](_0x4a52ea(0x157)));
                }
            }
        }
        if (_0x3a5dc4) {
            var _0x4635dc = _0x29d402 / _0x8c41f6;
            if (_0x14995e <= _0x4635dc * 0x3 && _0x14995e > _0x4635dc * 0x2) _0x4894a2[_0x4a52ea(0x17c)](_0x4a52ea(0x198) + _0x427d94)['addClass']('seedling-' + _0x427d94);
            else {
                if (_0x14995e <= _0x4635dc * 0x2 && _0x14995e > _0x4635dc * 0x1) _0x4894a2[_0x4a52ea(0x17c)](_0x4a52ea(0x16f) + _0x427d94)[_0x4a52ea(0x193)](_0x4a52ea(0x1b3) + _0x427d94);
                else {
                    if (_0x14995e <= _0x4635dc * 0x1 && _0x14995e > 0x0) _0x4894a2[_0x4a52ea(0x17c)](_0x4a52ea(0x1b3) + _0x427d94)[_0x4a52ea(0x193)](_0x4a52ea(0x17a) + _0x427d94);
                    else _0x14995e <= 0x0 && (_0x4894a2['removeClass'](_0x4a52ea(0x17a) + _0x427d94)[_0x4a52ea(0x193)](_0x4a52ea(0x15b) + _0x427d94), BottomMessageUI[_0x4a52ea(0x16a)]('Pronto\x20para\x20Colher!'), _0x4894a2[_0x4a52ea(0x1a2)]('title', _0x4a52ea(0x156)), clearInterval(_0xf5549c), _0x375146['html'](_0x4a52ea(0x157)));
                }
            }
        }
    }, 0x3e8);
}

function animateMoneyTooltip() {
    var _0x751bcf = _0x3a3428;
    MoneyBoxMessage[_0x751bcf(0x1a0)]({
        'opacity': '1',
        'bottom': '-20px'
    }, 0xbb8, function() {
        var _0x4cd6aa = _0x751bcf;
        MoneyBoxMessage[_0x4cd6aa(0x1a0)]({
            'opacity': '0',
            'bottom': _0x4cd6aa(0x15d)
        });
    });
}

function animateMoneyTooltip2(_0xa2f9f3, _0x4305bb) {
    var _0xe24c30 = _0x3a3428;
    _0x4305bb['find'](_0xe24c30(0x1a9))[_0xe24c30(0x16e)]();
    var _0x4ef288 = $(_0xe24c30(0x1ab) + _0xa2f9f3 + '</b></font></div>');
    _0x4305bb[_0xe24c30(0x15f)](_0x4ef288), _0x4ef288[_0xe24c30(0x1b7)]({
        'position': _0xe24c30(0x165),
        'bottom': '0',
        'opacity': '0'
    }), _0x4ef288[_0xe24c30(0x1a0)]({
        'opacity': '1',
        'bottom': '60px'
    }, 0x1f4, function() {
        var _0x56d6c4 = _0xe24c30;
        _0x4ef288[_0x56d6c4(0x1a0)]({
            'opacity': '0',
            'bottom': _0x56d6c4(0x15a)
        }, 0x1f4, function() {
            _0x4ef288['remove']();
        });
    });
}

function animateBottomUITooltip() {
    var _0x5be746 = _0x3a3428;
    BottomMessageUI[_0x5be746(0x1a0)]({
        'opacity': '1'
    }, 0x5dc, _0x5be746(0x17d), function() {
        var _0xf7fff9 = _0x5be746;
        BottomMessageUI[_0xf7fff9(0x1a0)]({
            'opacity': '0'
        });
    });
}

function showSeedSelectionMenu() {
    var _0x5300f7 = _0x3a3428;
    cropChooserWrapper[_0x5300f7(0x193)]('show'), cropChooserWrapper['find'](_0x5300f7(0x19a))[_0x5300f7(0x193)](_0x5300f7(0x1c3));
    if (Money >= SeedCostT6) {
        cropChooserWrapper[_0x5300f7(0x17b)](_0x5300f7(0x158))['removeClass'](_0x5300f7(0x1c3)), cropChooserWrapper[_0x5300f7(0x17b)](_0x5300f7(0x1ac))[_0x5300f7(0x17c)](_0x5300f7(0x1c3)), cropChooserWrapper[_0x5300f7(0x17b)](_0x5300f7(0x18f))[_0x5300f7(0x17c)](_0x5300f7(0x1c3));
        if (Deposited >= 0x1e || Rank == _0x5300f7(0x187)) cropChooserWrapper[_0x5300f7(0x17b)]('.potato')[_0x5300f7(0x17c)](_0x5300f7(0x1c3));
        if (Deposited >= 0x28 || Rank == _0x5300f7(0x187)) cropChooserWrapper[_0x5300f7(0x17b)](_0x5300f7(0x182))['removeClass'](_0x5300f7(0x1c3));
        if (Deposited >= 0x32 || Rank == _0x5300f7(0x187)) cropChooserWrapper['find'](_0x5300f7(0x1b9))[_0x5300f7(0x17c)]('hide');
    } else {
        if (Money >= SeedCostT5) {
            cropChooserWrapper[_0x5300f7(0x17b)]('.corn')[_0x5300f7(0x17c)]('hide'), cropChooserWrapper[_0x5300f7(0x17b)](_0x5300f7(0x1ac))[_0x5300f7(0x17c)](_0x5300f7(0x1c3)), cropChooserWrapper['find']('.watermelon')[_0x5300f7(0x17c)](_0x5300f7(0x1c3));
            if (Deposited >= 0x1e || Rank == 'youtuber') cropChooserWrapper['find']('.potato')['removeClass'](_0x5300f7(0x1c3));
            if (Deposited >= 0x28 || Rank == 'youtuber') cropChooserWrapper[_0x5300f7(0x17b)](_0x5300f7(0x182))[_0x5300f7(0x17c)](_0x5300f7(0x1c3));
        } else {
            if (Money >= SeedCostT4) {
                cropChooserWrapper['find'](_0x5300f7(0x158))[_0x5300f7(0x17c)](_0x5300f7(0x1c3)), cropChooserWrapper[_0x5300f7(0x17b)](_0x5300f7(0x1ac))[_0x5300f7(0x17c)](_0x5300f7(0x1c3)), cropChooserWrapper[_0x5300f7(0x17b)]('.watermelon')[_0x5300f7(0x17c)](_0x5300f7(0x1c3));
                if (Deposited >= 0x1e || Rank == _0x5300f7(0x187)) cropChooserWrapper['find'](_0x5300f7(0x1c0))['removeClass'](_0x5300f7(0x1c3));
            } else {
                if (Money >= SeedCostT3) cropChooserWrapper[_0x5300f7(0x17b)](_0x5300f7(0x158))[_0x5300f7(0x17c)](_0x5300f7(0x1c3)), cropChooserWrapper[_0x5300f7(0x17b)](_0x5300f7(0x1ac))[_0x5300f7(0x17c)](_0x5300f7(0x1c3)), cropChooserWrapper[_0x5300f7(0x17b)](_0x5300f7(0x18f))[_0x5300f7(0x17c)]('hide');
                else {
                    if (Money >= SeedCostT2) cropChooserWrapper['find'](_0x5300f7(0x158))['removeClass']('hide'), cropChooserWrapper['find'](_0x5300f7(0x1ac))[_0x5300f7(0x17c)]('hide');
                    else Money >= SeedCostT1 && cropChooserWrapper[_0x5300f7(0x17b)](_0x5300f7(0x158))[_0x5300f7(0x17c)](_0x5300f7(0x1c3));
                }
            }
        }
    }
}

function _0x5242() {
    var _0x2095bd = ['empty', '#balance', '1291498qqBZkM', 'watermelon', '#MoneyBoxMessage', 'sunflower\x20seed-sunflower', '#showvalor', 'style', '<div\x20id=\x27showvalor\x27><font\x20color=\x27#00ff05\x27><b>+\x20R$', '.pumpkin', '940157dHyoyX', '#deposited', '#plotWrapper\x20>\x20.plotBox', '#closeConfirm', 'plot-', 'show', 'adolescent-', 'e-wallet/deposit', 'Ganho:\x20R$', 'ready-to-harvest', 'css', 'VocÃª\x20nÃ£o\x20depositou\x20o\x20valor\x20mÃ­nimo\x20necessÃ¡rio!', '.sunflower', '.profit', 'potato', 'play', 'onclick', '652176zUEYuw', 'yes', '.potato', 'location', 'includes', 'hide', 'crop-type-option', '#UIMessageWrapper', '.seed-selection', '2327877VcZcMI', 'Viu\x20como\x20Ã©\x20fÃ¡cil?\x20VocÃª\x20jÃ¡\x20pode\x20jogar\x20pra\x20valer!', 'plot\x20ready', 'addEventListener', 'success', 'log', '<font\x20color=\x27#00ff05\x27><b>+\x20R$', '#ConfirmWrapper', 'abs', 'plot', 'value', 'title', 'corn\x20seed-corn', 'onload', '#moneyBox', '<font\x20color=\x27red\x27><b>-\x20R$', 'Pronto\x20para\x20Colher!', '<div\x20class=\x22clock\x22\x20style=\x22background-color:\x20rgb(255\x20255\x20255\x20/\x200%)\x20!important;\x22>âœ…</div>', '.corn', '\x20Segundos\x20atÃ©\x20estar\x20pronto.', '10px', 'ready-to-harvest\x20adult-', '.cost', '-30px', 'PreÃ§o:\x20R$', 'append', 'sunflower', 'Tempo:\x20', 'href', 'VocÃª\x20nÃ£o\x20tem\x20saldo\x20suficiente!', '#rank', 'absolute', 'carrot', 'potato\x20seed-potato', 'click', 'cropCostLocal:', 'html', 'display', '.plotBox', '#numplots', 'remove', 'seedling-', 'plotBox\x20plot\x20ready', 'cropType:', 'available', '.plotBoxSaved', 'fadeOut', '#cropChooserWrapper\x20>\x20.footerx\x20>\x20.crop-type-option', '8724317IGRXhF', 'ready', 'clone', '.clock', 'mature-', 'find', 'removeClass', 'linear', 'hasClass', '#ConfirmWrapper\x20>\x20.buttons\x20>\x20.button', 'intro-close', 'corn', '.carrot', 'target', 'tutorialOne', 'pumpkin', '1871776KHTeNt', 'youtuber', 'Pronto\x20para\x20Plantar!', 'querySelector', 'catch', 'introPopup', 'themeSound', 'getElementById', '.time', '.watermelon', 'watermelon\x20seed-watermelon', '5545895VykeFg', '2024-06-01\x2000:00:00', 'addClass', 'time', 'then', 'none', '#tutorialFloat', 'seed-', 'Sucesso\x20na\x20colheita!', '.crop-type-option', 'Playback\x20failed:', 'plantSound', 'toFixed', 'floor', '#closeChooser', 'animate', '</b></font>', 'attr'];
    _0x5242 = function() {
        return _0x2095bd;
    };
    return _0x5242();
}

function hideSeedSelectionMenu() {
    var _0x5ec281 = _0x3a3428;
    cropChooserWrapper[_0x5ec281(0x17c)](_0x5ec281(0x1b2));
}

function showConfirmMenu() {
    var _0x22cb76 = _0x3a3428;
    ConfirmWrapper[_0x22cb76(0x193)](_0x22cb76(0x1b2));
}

function hideConfirmMenu() {
    var _0x2947f5 = _0x3a3428;
    ConfirmWrapper[_0x2947f5(0x17c)](_0x2947f5(0x1b2));
}

function showIntroPopup() {
    var _0x302c49 = _0x3a3428,
        _0x403173 = document[_0x302c49(0x18d)](_0x302c49(0x18b)),
        _0x112024 = document['getElementsByClassName'](_0x302c49(0x180))[0x0];
    _0x403173[_0x302c49(0x1aa)][_0x302c49(0x16b)] = 'block', _0x112024[_0x302c49(0x1bd)] = function() {
        var _0x38cb40 = _0x302c49;
        _0x403173[_0x38cb40(0x1aa)][_0x38cb40(0x16b)] = _0x38cb40(0x196);
    }, window[_0x302c49(0x1bd)] = function(_0x511d8a) {
        var _0xed07d5 = _0x302c49;
        _0x511d8a[_0xed07d5(0x183)] == _0x403173 && (_0x403173[_0xed07d5(0x1aa)][_0xed07d5(0x16b)] = _0xed07d5(0x196));
    };
}
window[_0x3a3428(0x153)] = function() {
    Deposited == 0x0 && showIntroPopup();
};
Pick a color on this page!Copied!